import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {    
    try {
        const res = await fetch(`http://localhost:8080/api/users/${params.username}`);
        const item = await res.json();
        return item.user;
    } catch (err) {
        throw error(404, 'Not found');
    }
}


