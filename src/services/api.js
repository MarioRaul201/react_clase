import { videojuegos } from '../data/videojuegos'

const GRAPHQL_URL = 'https://rickandmortyapi.com/graphql';

// Simula una petición a un servidor: responde después de 1.5 segundos
export function obtenerVideojuegos() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(videojuegos), 1500);
    });
}

export async function queryGraphQL(query, variables = {}) {

    //obtener token del navegador
    const token = localStorage.getItem('token');

    //objeto de cabeceras basicas para el header autorization
    const headers = {
        'Content-Type': 'application/json'
    }

    //Insertamos token de existir
    if(token){
        headers['Authorization'] = 'Bearer ' + token;
    }

    //Convertir objeto JS a JSON
    const cuerpoPeticion = JSON.stringify({
        query: query,
        variables: variables
    });

    const respuesta = await fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: headers,
        body: cuerpoPeticion
    })

    //convertir respuesta de servidor a JS
    const resultado = await respuesta.json();

    //revisar errores
    if(resultado.errors){
        const mensajeError = resultado.errors[0].message;
        throw new Error(mensajeError);
    }

    return resultado.data;
}
