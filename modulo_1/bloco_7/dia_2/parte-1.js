const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = order => {
  // Adicione abaixo as informações necessárias.

  const deliveryPerson = Object.values(order.order.delivery)[0];
  const clientInfos = Object.values(order);
  const address = Object.values(order.address);

  const completedOrder = `Olá ${deliveryPerson}, entrega para: ${clientInfos[0]}, Telefone:
${clientInfos[1]}, R. ${address[0]}, Nº: ${address[1]}, AP: ${address[2]}`;

  return console.log(completedOrder);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const clientName = order.name = 'Luiz Silva';
  order.order.pizza.muzzarella = 'muzzarella';
  order.order.pizza.calabresa = 'calabresa';
  const coke = order.order.drinks.coke.type;
  const pizzaFlavors = Object.keys(order.order.pizza);
  const orderCost = order.payment.total;

  const finalOrder = `Olá ${clientName}, o total do seu pedido de ${pizzaFlavors[2]}, ${pizzaFlavors[3]} e
${coke} é R$ ${orderCost},00`;

  return console.log(finalOrder);
}

orderModifier(order);

