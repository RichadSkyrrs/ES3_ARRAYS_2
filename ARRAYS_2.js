const faker = require('faker');

faker.locale = 'pt_BR';

const Clientes = [];

for (let index = 0; index < 500; index++) {
  const name = faker.Name();
  const birthday = faker.Date(1910, 2019);
  const genre = faker.random.boolean() == true ? 'M' : 'F';
  const lastpurchase = faker.Date();
  const countpurchase = faker.Number(100);

  client = {
    name,
    birthday,
    genre,
    lastpurchase,
    countpurchase,
  }
  Clients.push(client)
}
