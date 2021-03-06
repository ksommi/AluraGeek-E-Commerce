"use strict";

/* Objetos */

var lineaProductos = document.querySelectorAll(".ul-productos");

var productosStarWars = [
  {
    url: "#",
    title: "Star Wars",
    price: "$60.00",
    img: "images/Productos/Star Wars/image1.svg",
  },
  {
    url: "#",
    title: "Star Wars",
    price: "$85.00",
    img: "images/Productos/Star Wars/image2.svg",
  },
  {
    url: "#",
    title: "Star Wars",
    price: "$120.50",
    img: "images/Productos/Star Wars/image3.svg",
  },
  {
    url: "#",
    title: "Star Wars",
    price: "$330.00",
    img: "images/Productos/Star Wars/image4.svg",
  },
  {
    url: "#",
    title: "Star Wars",
    price: "$30.00",
    img: "images/Productos/Star Wars/image5.svg",
  },
  {
    url: "#",
    title: "Star Wars",
    price: "$76.00",
    img: "images/Productos/Star Wars/image6.svg",
  },
];

var productosDiversos = [
  {
    url: "#",
    title: "Diversos",
    price: "$20.00",
    img: "images/Productos/Diversos/image1.svg",
  },
  {
    url: "#",
    title: "Diversos",
    price: "$35.00",
    img: "images/Productos/Diversos/image2.svg",
  },
  {
    url: "#",
    title: "Diversos",
    price: "$74.50",
    img: "images/Productos/Diversos/image3.svg",
  },
  {
    url: "#",
    title: "Diversos",
    price: "$53.40",
    img: "images/Productos/Diversos/image4.svg",
  },
  {
    url: "#",
    title: "Diversos",
    price: "$180.00",
    img: "images/Productos/Diversos/image5.svg",
  },
  {
    url: "#",
    title: "Diversos",
    price: "$300.00",
    img: "images/Productos/Diversos/image6.svg",
  },
];

var productosConsolas = [
  {
    url: "#",
    title: "Consolas",
    price: "$100.00",
    img: "images/Productos/Consolas/image1.svg",
  },
  {
    url: "#",
    title: "Consolas",
    price: "$850.00",
    img: "images/Productos/Consolas/image2.svg",
  },
  {
    url: "#",
    title: "Consolas",
    price: "$440.50",
    img: "images/Productos/Consolas/image3.svg",
  },
  {
    url: "#",
    title: "Consolas",
    price: "$160.00",
    img: "images/Productos/Consolas/image4.svg",
  },
  {
    url: "#",
    title: "Consolas",
    price: "$780.00",
    img: "images/Productos/Consolas/image5.svg",
  },
  {
    url: "#",
    title: "Consolas",
    price: "$150.00",
    img: "images/Productos/Consolas/image6.svg",
  },
];

/* Funciones */

function addElement(array, linea) {
  array.forEach((element) => {
    var li = document.createElement("li");
    var img = document.createElement("img");
    img.classList.add("product-image");
    var h4 = document.createElement("h4");
    h4.classList.add("product-title");
    var p = document.createElement("p");
    p.classList.add("product-price");
    var link = document.createElement("a");
    link.classList.add("product-link");

    img.src = element.img;
    li.appendChild(img);
    h4.innerText = element.title;
    li.appendChild(h4);
    p.innerText = element.price;
    li.appendChild(p);
    link.href = element.url;
    li.appendChild(link);

    linea.appendChild(li);
  });
}
