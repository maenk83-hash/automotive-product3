const products = [
  { name: "Car Lift", price: "$1200", image: "car-lift.jpg" },
  { name: "Tire Balancer", price: "$900", image: "tire-balancer.jpg" },
  { name: "Wheel Aligner", price: "$1500", image: "wheel-aligner.jpg" }
];
const container = document.getElementById('products');
products.forEach(p => {
  const div = document.createElement('div');
  div.className = 'product';
  div.innerHTML = `<h2>${p.name}</h2><img src="${p.image}" width="200"><p>Price: ${p.price}</p>`;
  container.appendChild(div);
});