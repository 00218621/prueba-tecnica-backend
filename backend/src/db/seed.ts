import { db } from "./index";
import { products } from "./schema";

const seedProducts = [
  {
    id: "1",
    name: "Laptop Pro X1",
    price: 1299.99,
    description: "Potente laptop con procesador de última generación, 16GB RAM y 512GB SSD.",
    category: "Electronics",
    image: "https://picsum.photos/seed/laptop/400/300",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    price: 199.99,
    description: "Auriculares inalámbricos con cancelación de ruido activa y 30 horas de batería.",
    category: "Electronics",
    image: "https://picsum.photos/seed/headphones/400/300",
  },
  {
    id: "3",
    name: "Smart Watch Series 5",
    price: 349.99,
    description: "Reloj inteligente con monitor de salud, GPS integrado y resistencia al agua.",
    category: "Electronics",
    image: "https://picsum.photos/seed/smartwatch/400/300",
  },
  {
    id: "4",
    name: "Cotton T-Shirt",
    price: 29.99,
    description: "Camiseta de algodón 100% orgánico, suave y cómoda para el día a día.",
    category: "Clothing",
    image: "https://picsum.photos/seed/tshirt/400/300",
  },
  {
    id: "5",
    name: "Running Shoes",
    price: 89.99,
    description: "Zapatillas deportivas con tecnología de amortiguación avanzada.",
    category: "Clothing",
    image: "https://picsum.photos/seed/shoes/400/300",
  },
  {
    id: "6",
    name: "Coffee Maker Deluxe",
    price: 79.99,
    description: "Cafetera programable con molinillo integrado y jarra térmica de 12 tazas.",
    category: "Home",
    image: "https://picsum.photos/seed/coffee/400/300",
  },
  {
    id: "7",
    name: "Desk Lamp LED",
    price: 45.99,
    description: "Lámpara de escritorio LED con ajuste de brillo y temperatura de color.",
    category: "Home",
    image: "https://picsum.photos/seed/lamp/400/300",
  },
  {
    id: "8",
    name: "Backpack Urban",
    price: 59.99,
    description: "Mochila urbana con compartimento acolchado para laptop y puerto USB.",
    category: "Accessories",
    image: "https://picsum.photos/seed/backpack/400/300",
  },
  {
    id: "9",
    name: "Bluetooth Speaker",
    price: 129.99,
    description: "Altavoz portátil con sonido 360°, resistente al agua y 20 horas de batería.",
    category: "Electronics",
    image: "https://picsum.photos/seed/speaker/400/300",
  },
  {
    id: "10",
    name: "Yoga Mat Premium",
    price: 35.99,
    description: "Esterilla de yoga antideslizante, ecológica y con grosor de 6mm.",
    category: "Sports",
    image: "https://picsum.photos/seed/yoga/400/300",
  },
];

async function seed() {
  await db.delete(products);

  for (const product of seedProducts) {
    await db.insert(products).values(product);
  }

  process.exit(0);
}

seed();
