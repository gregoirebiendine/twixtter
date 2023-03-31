import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {
    let item = null;
    try {
        const res = await fetch('http://localhost:8080/api/auth/islogin', {method: 'POST'});
        item = await res.json();
    } catch (err: any) {
        console.log(err);
    }
    if (item && item.user)
        throw redirect(302, '/feed');
    return null;
}