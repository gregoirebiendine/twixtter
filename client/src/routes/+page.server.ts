import { redirect, error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    let item;
    try {
        const res = await fetch('http://localhost:8080/api/auth/islogin', {method: 'POST'});
        item = await res.json();
    } catch (err) {
        throw error(500, 'Internal error');
    }
    if (item.user)
        throw redirect(302, '/feed');
}