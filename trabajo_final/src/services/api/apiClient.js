import httpClient from "../httpClient.js"

// Defino variables globales
let http = httpClient(process.env.VUE_APP_DOLARURL);

// DEBUG
//console.log("la url del env es:");
//console.log(process.env.VUE_APP_COMPRAURL);
//console.log(http);

/* Setteo los parametros para consumir, los que me pide la api
/* Headers de un protocolo http???? Un campo es el header, metainfo que el consumo es seguro, o que tiene tal propiedad. Va en documentacion del header.*/

export default {
    http,
}