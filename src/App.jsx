import { useEffect, useState } from 'react';
import './App.css';

const Producto = ({ producto, activeImage, setActiveImage }) => (
  <article className="producto">
    <h2>{producto.nombre}</h2>
    <div className="imagenes">
      <img 
        src={producto.imagenes[activeImage]} 
        alt={`Imagen del producto ${producto.nombre}`} 
        onClick={() => setActiveImage((activeImage + 1) % producto.imagenes.length)}
        onError={(e) => e.target.src = './img/error500.jpg'} // Imagen de reemplazo
      />
    </div>
    <p>Medidas: {producto.medidas}</p>
    <p>Precio: {producto.precio}</p>
    <p>Stock: {producto.stock}</p>
    <p>Colores: {producto.colores}</p>
  </article>
);

function App() {
  useEffect(() => {
    document.title = 'RomaMora';
  }, []);

  const [activeImage, setActiveImage] = useState(0);
  const [colorFilter, setColorFilter] = useState("");

  const productos = [
    {
      nombre: "Espejo Horizonte",
      imagenes: ["./img/espejoblanco1.jpg", "./img/espejoblanco2.jpg"],
      medidas: "0.50 x 1.70",
      precio: "$75.000",
      stock: "4 unidades",
      colores: "Blanco, Hueso",
    },
    {
      nombre: "Espejo Serenidad",
      imagenes: ["./img/espejoblancochico1.jpg", "./img/espejoblancochico2.jpg"],
      medidas: "0.46 x 0.69",
      precio: "$40.000",
      stock: "4 unidades",
      colores: "Blanco, Hueso, Negro, Marron",
    },
    {
      nombre: "Espejo Raices",
      imagenes: ["./img/espejochicomarron1.jpg", "./img/espejochicomarron2.jpg"],
      medidas: "0.50 x 0.70",
      precio: "$50.000",
      stock: "2 unidades",
      colores: "Blanco, Marron",
    },
    {
      nombre: "Espejo Armonia",
      imagenes: ["./img/espejomarron1.jpg", "./img/espejomarron2.jpg"],
      medidas: "0.50 x 1.72",
      precio: "$100.000",
      stock: "1 unidad",
      colores: "Marron",
    },
    {
      nombre: "Espejo Esencia",
      imagenes: ["./img/espejonegro1.jpg", "./img/espejonegro2.jpg"],
      medidas: "0.50 x 1.27",
      precio: "$60.000",
      stock: "4 unidades",
      colores: "Turquesa, Negro, Blanco, Hueso",
    },
    {
      nombre: "Espejo Aurora",
      imagenes: ["./img/espejoredondo1.jpg", "./img/espejoredondo2.jpg"],
      medidas: "0.50 x 0.50",
      precio: "$55.000",
      stock: "1 unidad",
      colores: "Negro",
    }
  ];

  const filteredProducts = productos.filter(producto => 
    colorFilter === "" || producto.colores.includes(colorFilter)
  );

  return (
    <>
      <header>
        <img className="logotipo" src="./img/logo.jpg" alt="logo" />
      </header>
      <main>
        <section className="filtros">
          <label htmlFor="colorFilter">Filtrar por color:</label>
          <select id="colorFilter" onChange={(e) => setColorFilter(e.target.value)}>
            <option value="">Todos los colores</option>
            <option value="Blanco">Blanco</option>
            <option value="Hueso">Hueso</option>
            <option value="Negro">Negro</option>
            <option value="Marron">Marron</option>
            <option value="Turquesa">Turquesa</option>
          </select>
        </section>
        <section className="productos">
          {filteredProducts.map((producto, index) => (
            <Producto 
              key={index} 
              producto={producto} 
              activeImage={activeImage} 
              setActiveImage={setActiveImage} 
            />
          ))}
        </section>
      </main>
      <footer>
        <h1 className="pedido"></h1>
        <h1 className="pedido">Haz tu pedido acá</h1>
        <a className="numero" href="https://walink.co/35f966" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-whatsapp bx-md'>2994610135</i>
        </a>
        <h1 className="novedades">Más novedades acá</h1>
        <a className="instagram" href="https://www.instagram.com/romamora_espejos?igsh=MWNucXd5YXJ5ZGwwcg==" target="_blank" rel="noopener noreferrer">
          <i className='bx bxl-instagram bx-md'>RomaMora_espejos</i>
        </a>
      </footer>
    </>
  );
}

export default App;