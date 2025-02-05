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
];

function zeigeProdukte() {
  console.log("Hallo! Hier sind unsere Produkte:");
  produkte.forEach((produkt, index) => {
    console.log(`${index + 1}. ${produkt.name} - ${produkt.preis}€`);
  });
}

readline.question(
  "Willkommen im Online-Shop!\nWie lautet dein Name? ",
  (name) => {
    console.log(`\nHallo ${name}!`);

    zeigeProdukte();

    readline.question(
      "\nBitte gib die Nummer des gewünschten Produkts ein: ",
      (produktNummer) => {
        const produktIndex = parseInt(produktNummer) - 1;

        if (produktIndex >= 0 && produktIndex < produkte.length) {
          const gewahltesProdukt = produkte[produktIndex];

          readline.question(
            `Wie viele ${gewahltesProdukt.name} möchtest du kaufen? `,
            (anzahl) => {
              const menge = parseInt(anzahl);

              let gesamtPreis = gewahltesProdukt.preis * menge;

              if (gesamtPreis > 1000) {
                const rabatt = gesamtPreis * 0.1;
                gesamtPreis -= rabatt;
                console.log(`\nRabatt: 10% (${rabatt.toFixed(2)}€)`);
              }

              console.log(
                `\n${name}, du hast ${menge}x ${gewahltesProdukt.name} bestellt.`
              );
              console.log(`Gesamtpreis: ${gesamtPreis.toFixed(2)}€`);

              readline.close();
            }
          );
        } else {
          console.log("Fehler: Ungültige Produktauswahl!");
          readline.close();
        }
      }
    );
  }
);
