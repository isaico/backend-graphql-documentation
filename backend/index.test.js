import assert from 'assert';
import ProductosApi from './src/api/productos.api.js';

describe('Test de Productos,Encontrar', () => {
  /* --------------------------------- BUSCAR --------------------------------- */
  it('DEBERIA BUSCAR TODOS LOS PRODUCTOS DE LA DB', async () => {
    const api = new ProductosApi();
    const allProds = await api.buscar();
    assert.strictEqual(allProds.length, 9);
  });
  it('DEBERIA BUSCAR UN PRODUCTO SEGUN EL ID PASADA', async () => {
    const api = new ProductosApi();
    const oneProd = await api.buscar('62c72a833fe2668778501d26');
    assert.strictEqual(oneProd.length, 1);
  });
});
describe('Test de Productos, Agregacion ', () => {
  /* --------------------------------- AGREGAR -------------------------------- */
  it('DEBERIA AGREGAR UN PRODUCTO A LA DB', async () => {
    const api = new ProductosApi();
    const nuevoProd = {
      nombre: 'Mouse',
      descripcion: 'alguna',
      precio: 66,
      foto: 'http://someurl.com',
      stock: 99,
    };
    const resp = await api.agregar(nuevoProd);
    const nombreProd = resp._doc.nombre;
    assert.strictEqual(nuevoProd.nombre, nombreProd);
  });
});
describe('Test de Productos, Eliminar y remplazar', () => {
  /* --------------------------------- BORRAR --------------------------------- */
  it('DEBERIA BORRAR UN PRODUCTO DE LA DB', async () => {
    const api = new ProductosApi();
    const id = '62d58203f4db95fcbf9fde1f';
    const resp = await api.borrar(id);
    assert.strictEqual(resp.deletedCount, 1);
  });
  it('DEBERIA REEMPLAZAR UN PRODUCTO DE LA DB', async () => {
    const api = new ProductosApi();
    const id = '62d5824a1b6a76df4bae00c2';
    const nuevoProd = {
      nombre: 'Mouse inalambrico',
      descripcion: 'alguna desc del mouse',
      precio: 86,
      foto: 'http://someurl.com',
      stock: 99,
    };
    const resp = await api.reemplazar(id, nuevoProd);
    assert.strictEqual(resp.nombre, nuevoProd.nombre);
  });
});
