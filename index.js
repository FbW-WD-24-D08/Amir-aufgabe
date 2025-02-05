import { createInterface } from "readline";

const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const produkte = [
  { name: "Laptop", preis: 999.99 },
  { name: "Smartphone", preis: 499.99 },
  { name: "Kopfhörer", preis: 99.99 },
  { name: "Monitor", preis: 199.99 },
  { name: "Tastatur", preis: 49.99 },
  { name: "Maus", preis: 29.99 },
  { name: "Drucker", preis: 149.99 },
  { name: "Tablet", preis: 299.99 },
  { name: "Smartwatch", preis: 199.99 },
  { name: "Lautsprecher", preis: 79.99 },
];

function zeigeProdukte() {
  console.log("Hallo! Hier sind unsere Produkte:");
  produkte.forEach((produkt, index) => {
    console.log(`${index + 1}. ${produkt.name} - ${produkt.preis}€`);
  });
}
