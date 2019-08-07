export function fetchJson(url,callback){
    return fetch(url)
    .then(results=>results.json())
    .then(json=>callback(json));
}