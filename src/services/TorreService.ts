export async function getJobs(offset: number, size: number) { 
    const url = 'https://search.torre.co/opportunities/_search/?' + new URLSearchParams({
        size: size+'',
        aggregate: 'false',
        offset: offset +''
    });
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify({}) // body data type must match "Content-Type" header
        });
    return response.json();
}

export async function getCandidates(offset: number, size: number, name: string) { 
    const url = 'https://search.torre.co/people/_search/?' + new URLSearchParams({
        size: size+'',
        aggregate: 'false',
        offset: offset +''
    });    
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: name!= undefined && name !== '' ? JSON.stringify({name: {term: name}}) : JSON.stringify({}) // body data type must match "Content-Type" header
        });
    return response.json();
}