const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

/**
 * Encapsulation of fetch() method
 */
export default class Requester {
    /**
     * Perfom a fetch() with GET method
     * @param url URL you want to get
     * @returns fetch() response as Promise<Response> 
     */
    static get(url: string) {
        return fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: headers
        });
    }
    
    /**
     * Perfom a fetch() with POST method
     * @param url URL you want to post
     * @param body An object or null to pass has request body
     * @returns fetch() response as Promise<Response> 
     */
    static post(url: string, body: Object | null = null) {
        return fetch(url, {
            method: 'POST',
            credentials: 'include',
            headers: headers,
            body: body ? JSON.stringify(body) : null
        });
    }
};