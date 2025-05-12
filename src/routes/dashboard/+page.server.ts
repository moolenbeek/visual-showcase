import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import * as schema from '$lib/server/db/schema';
import { fail } from '@sveltejs/kit';
import { slugify } from '$lib/utils';
import { eq } from 'drizzle-orm';

export const load: PageServerLoad = async (event) => {
    if (!event.locals.user) {
        return redirect(302, '/login');
    }

    if (event.locals.user.role !== 'admin') {
        return redirect(302, '/');
    }

    const categories = await db.select().from(schema.gallery_category);

    return {
        user: event.locals.user,
        categories
    };
};

export const actions = {
    create: async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get('name') as string;

        if (!name) {
            return fail(400, { error: 'Name is required' });
        }

        try {
            const slug = slugify(name);
            const [newCategory] = await db.insert(schema.gallery_category)
                .values({
                    name,
                    slug
                })
                .returning();
            return { success: true, category: newCategory };
        } catch (error) {
            return fail(400, { error: 'Failed to create category' });
        }
    },
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');

        if (!id) {
            return fail(400, { error: 'Category ID is required' });
        }

        try {
            await db.delete(schema.gallery_category)
                .where(eq(schema.gallery_category.id, Number(id)));
            return { success: true };
        } catch (error) {
            return fail(400, { error: 'Failed to delete category' });
        }
    }
};
