import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ fetch }) {    
    try {
        const res = await fetch('http://localhost:8080/api/auth/islogin', {method: 'POST'});
        const item = await res.json();
        if (!item.user)
            throw Error();
        return item.user;
    } catch (err) {
        throw redirect(302, '/');
    }
}