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


// Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const address = order.address;

  return `Olá ${deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${address.street}, Nº: ${address.number}, AP: ${address.apartment}`;
  
}

customerInfo(order);

// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const address = order.address;
  order.order = { 
    pizza: {
      muzzarella: {
        amount: 1,
        price: 20,
      },
      calabresa: {
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
    }
  }
  const orderPizza = Object.entries(order.order.pizza);
  const orderDrinks = order.order.drinks;

  address.name = 'Olá Luiz Silva';
  order.payment = 50;
  return `Olá ${address.name}, o total do seu pedido de ${orderPizza[0][0]}, ${orderPizza[1][0]} e ${orderDrinks.coke.type} é R$ ${order.payment},00.`;
}

console.log(orderModifier(order));
