/*Es para gestionar todo el manejo de mis productos, para no tener
toda la logica en el "productController" y no ser muy grande
*/

const db = require('../model/database/models')
const fs = require('fs');
const path = require('path');
//const upload = require('../middlewares/multer');


const productService = {
    /* getAll: function(){
        return this.products;    
    }, */
    getAll: async function (){
        try {
            // console.log("Estas en el getAll ");
            let products = await db.Moto.findAll({});
            
            return products;
            
        } catch (error) {
            //para q al menos no se rompa la vista
            //mandar un mensaje de error o vacio
            return [];
        }    
    },

}
module.exports = productService;

//para ver que regresa cada funcion del Service que voy configurando 
//$ node src/data/productService.js 
// la consulta tiene que ser asincrona, ya q las funciones son asincrenas y 
//con solo "console.log(), decia pendiente y no esperaba la respuesta"

// async function aux(){
//     try {
//         let aux = await productService.filter(req);
//         console.log(aux);
        
//     } catch (error) {
//         console.log(error);
//     }}

// aux();
// 


//async function aux(){
//     try {
//         let aux = await productService.getAll();
//         console.log(typeof aux);
//         console.log(aux.modelo);
        
//     } catch (error) {
//         console.log(error);
//     }}

// aux();