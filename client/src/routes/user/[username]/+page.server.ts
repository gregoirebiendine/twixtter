import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch, params }) {    
    try {
        const res = await fetch(`http://localhost:8080/api/users/profile/${params.username}`);
        const item = await res.json();
        return item;
    } catch (err) {
        throw error(404, 'Not found');
    }
}


