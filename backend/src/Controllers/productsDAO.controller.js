import ProductosApi from '../api/productos.api.js';
const productosApi = new ProductosApi();

export const getProducts = async (req, res, next) => {
  try {
    const products = await productosApi.buscar();
    res.send(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    let dbResProduct = ' ';
    if (productId) dbResProduct = await productosApi.buscar(productId);
    if (dbResProduct !== ' ' && dbResProduct !== null) {
      res.send(dbResProduct);
    } else {
      const error = new Error(`producto con id ${productId} no encontrado`);
      error.code = 'PRODUCT_NOT_FOUND';
      throw error;
    }
  } catch (error) {
    return next(error);
  }
};

export const addProduct = async (req, res, next) => {
  try {
    const newProduct = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      stock: req.body.stock,
      precio: req.body.precio,
      foto: req.body.foto,
    };
    const dbRes = await productosApi.agregar(newProduct);
    if (dbRes) {
      res.send({ ...newProduct, _id: dbRes });
    } else {
      throw dbRes;
    }
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    let dbRes;
    if (productId) {
      dbRes = await productosApi.borrar(productId);
      if (dbRes) {
        res.send(`Producto con id ${productId} borrado con exito`);
      } else {
        throw dbRes;
      }
    } else {
      res.send(`Error. Producto con id ${productId} no encontrado`);
    }
  } catch (error) {
    return next(error);
  }
};

export const updateProduct = async (req,res,next)=>{
    try {
      const productId= req.params.id
      const newProd = req.body
    //   const dbRes = updateProdDB(productId,newProd)
      const dbRes = productosApi.reemplazar(productId, newProd)
      if(dbRes){
        res.send(`Producto con id ${productId} actualizado`)
      }else{
        throw dbRes
      }
    } catch (error) {
      return next(error)
    }
}

