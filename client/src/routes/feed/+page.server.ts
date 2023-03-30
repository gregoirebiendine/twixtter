import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    try {
        const res = await fetch('http://localhost:8080/api/users/feed');
        const item = await res.json();
        if (!item || (item && !item.connectedUser))
            throw Error();
        return item;
    } catch (err: any) {
        throw redirect(302, '/');
    }
}