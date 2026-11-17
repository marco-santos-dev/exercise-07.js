// 7. Frete da loja virtual. Leia o valor da compra e o peso do pacote em kg. Compra acima de R$ 250 tem frete grátis; até 1 kg custa R$ 15; até 5 kg custa R$ 25; acima de 5 kg custa R$ 25 mais R$ 4 por kg excedente.

const purchaseValue = Number(prompt("Valor da compra (R$):"));
const packageWeight = Number(prompt("Peso do pacote (kg):"));

let shippingCost;

if (purchaseValue > 250) {
    shippingCost = 0;
} else if (packageWeight <= 1) {
    shippingCost = 15;
} else if (packageWeight <= 5) {
    shippingCost = 25;
} else {
    shippingCost = 25 + (packageWeight - 5) * 4;
}

console.log(`Valor do frete: R$ ${shippingCost.toFixed(2)}`);
console.log(`Total da compra: R$ ${(purchaseValue + shippingCost).toFixed(2)}`);