export function fetchJson(url,callback,abortSignal){
    return fetch(url,{abortSignal})
    .then(results=>results.json())
    .then(json=>callback(json));
}