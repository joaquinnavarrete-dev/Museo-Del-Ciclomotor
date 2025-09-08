const path = require('path');
const productService = require('../data/productService');
const fs = require('fs');
const { log } = require('console');


const productController = {
//vista inicial
  index: async (req, res) => {
    try {
        // console.log("estoy en vista principal");
      let libros = await productService.getAll();
    //   let librosBest = await productService.fiandBest();
    //   let generos = await productService.fiandGenres();
    // console.log(libros);
    // console.log(libros[0].dataValues);
    // console.log(libros[1].dataValues);
    res.render('products/pagina_busqueda', {product: libros});    
    } catch (error) {
      console.log(error);
    }
  },
  productSearch: async (req, res) => {
    try {
      let busqueda = await productService.search(req);
      let productos = await productService.getAll();
      //console.log(busqueda);
      // res.render("products/searchProducts", { productResult: busqueda, products: productos })
      res.render('products/pagina_busqueda', {product: busqueda});  
    } catch (error) {
      
      console.log("error del serch");
    }

  },
  getOne: async (req, res) => {
    try {
      let id = req.params.id;
      console.log(id);
      let aux = await productService.getOne(id);
      //let aux1 = await productService.getAll();
      //let comentarios = await productService.allcoments(id);
      res.render('products/carta', { product: aux});
      //res.send(comentarios)
    } catch (error) {
      console.log(error);
    }
  }

//     getOne: async (req, res) => {
//     try {
//       let id = req.params.id;
//       let aux = await productService.getOne(id);
//       let aux1 = await productService.getAll();
//       let comentarios = await productService.allcoments(id);
//       res.render('products/productDetail', { producto: aux, product: aux1, comentarios: comentarios });
//       //res.send(comentarios)
//     } catch (error) {
//       res.render('admin/error');
//     }
//   }


}
module.exports = productController