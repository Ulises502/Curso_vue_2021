import api from './api/apiClient.js';
//import venta_http from './api/apiClient';

console.log(api.http);

// Una Función asincrónica nos garantiza en el componente cuando se llame al consumo del servicio, todo se va a resolver en la misma instancia de tiempo
const getCompra = async () => {
    return await api.http.get('dolarBlueCompra').then((response) => {
        return response;
    }).catch((err) => {
        return err;
    })
};

//const getVenta = async () => {
//return await venta_http.get().then((response) => {
//return response.data;
//}).catch((err) => {
//return err;
//})
//};

// Juntamos todas las funciones para exportarlas todas juntas
const exported = {
    getCompra,
    //getVenta,
};

export default exported;