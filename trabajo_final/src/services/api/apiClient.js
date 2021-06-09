import httpClient from '../httpClient'

// Defino variables globales
let compra_http = httpClient({
    baseUrl: process.env.VUE_APP_COMPRAURL
});

let venta_http = httpClient({
    baseUrl: process.env.VUE_APP_VENTAURL
});

/* Setteo los parametros para consumir, los que me pide la api
/* Headers de un protocolo http???? Un campo es el header, metainfo que el consumo es seguro, o que tiene tal propiedad. Va en documentacion del header.*/

export default {
    compra_http,
    venta_http,
}
