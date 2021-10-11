faker.locale = "pt_BR";

// Método de nomes 
const randomName = faker.name.findName();

console.log("Nome : " + randomName);

// Método marcas de carros
const vehicle = faker.vehicle.manufacturer();

console.log("Marca de carro : " + vehicle);

// Método e-mails
const email = faker.internet.email();

console.log("E-mail : " + email);

// Método telefone
const phone = faker.phone.phoneNumber();

console.log("Telefone : " + phone);

// Método pessoa aleatória (foto)
const avatar = faker.image.avatar();

console.log(avatar);

// Exemplo que poderia ser feito em um exercício
faker.locale = "pt_BR";

const numeroDeUsuarios = 3;
const usuarios = [];
let usuariosCriados = 1;

while (usuariosCriados <= numeroDeUsuarios) {
    const nome = faker.name.findName();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();
    const pessoaFotoAleatoria = faker.image.avatar();

    usuarios.push({
        nome,
        email,
        pessoaFotoAleatoria,
        phone,
    });
    usuariosCriados += 1;
}

console.log(usuarios);
