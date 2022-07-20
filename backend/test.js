import axios from 'axios';

async function getProducts() {
  try {
    const resp = await axios.get('http://localhost:8080/api/products');
    console.log(resp.data, 'soy data');
  } catch (error) {
    console.log(error);
  }
}
async function getProductById(id) {
  try {
    const resp = await axios.get(`http://localhost:8080/api/products/${id}`, {
      params: {
        id: id,
      },
    });
    console.log(resp.data,"soy el prod por id");
  } catch (error) {
    console.log(error);
  }
}
async function addProduct({nombre, descripcion, stock, precio, foto}) {
  try {
    const resp = await axios.post('http://localhost:8080/api/products', {
      nombre,
      descripcion,
      stock,
      precio,
      foto,
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}
async function updateProduct(id, prod) {
  try {
    const resp = await axios.put(`http://localhost:8080/api/products/${id}`, {
      prod,
      params: {
        id: id,
      },
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}
async function deleteProduct(id) {
  try {
    const resp = await axios.delete(`http://localhost:8080/api/products/${id}`, {
      params: {
        id: id,
      },
    });
    console.log(resp,"producto eliminado");
  } catch (error) {
    console.log(error);
  }
}
getProducts()
// getProductById('62d2e716b6f92aaa2efcc5e2'); //id dada para encontrar
const testProd={nombre:"Teclado",descripcion:"el mejor teclado",stock:100,precio:500,foto:"someurl"}
// addProduct(testProd)//parametros del objeto a agregar
// updateProduct("62c72ac5adfcd4577525f7ad",producto)//id a modificar y prod  nuevo
// deleteProduct("62d2e716b6f92aaa2efcc5e2")//id del prod a borrar

