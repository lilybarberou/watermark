export default async function Api(input: RequestInfo | URL, init?: RequestInit | undefined) {
    const res = await fetch(input, init);
    if (res.ok) return res.json();
    else return { error: 'Erreur dans la requête :' + res.statusText };
}
