import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import * as schema from '$lib/server/db/schema';

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
