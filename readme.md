# desafiofullstacksS1

## ✨ Projeto

DesafioFullstackS1 é uma aplicação baseada em um gerenciador de contatos, boa parte de seu Frontend foi desenvolvido com a biblioteca MaterialUI pensando em agilidade, escalabilidade e responsividade. Para os formulários foi utilizado o Yup em conjunto ao React Hook Form e para gestão da API foi escolhido o Axios. No Backend foi utilizado nodejs devido a sua robustez, segurança e praticidade, realizando algumas validações também. Em questão de futuras melhorias, acredito que seja uma melhor componentização.

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias/bibliotecas:

<table border="0">
 <tr>
<td> HTML5</td>
<td> CSS3</td>
<td> JavaScript</td>
 </tr>
  <tr>
<td> React</td>
<td> React Router Dom</td>
<td> React Hook Form</td>
 </tr>
  <tr>
<td> Axios</td>
<td> React Icons</td>
<td> Yup</td>
 </tr>
  <tr>
<td> MaterialUI</td>
<td> Styled-components</td>
<td> React Toastify</td>
 </tr>

   <tr>
<td> NodeJs</td>
<td> Express</td>
<td> TypeScript</td>
 </tr>
</table>

## 👨🏻‍💻 Executando o projeto

O projeto esta dividido em backend e frontend. A pasta de frontend se encontra dentro da de backend.
Utilize o **yarn** ou o **npm install** para instalar as dependências do projeto frontend.
Em seguida, inicie o projeto.

# Iniciando a versão web(Frontend):

```cl
yarn start ou npm run dev
```

# Iniciando a api(Backend):

```cl
 Crie um .env com os dados contidos no .env.exemple e crie um banco de dados postgres em sua máquina
```

<br />
<br />
<br />
<br />

## **Endpoints**

<p align = "center">
Este é a documentação da aplicação desafioFullstackS1 - Uma plataforma de gestão de contatos, que permite a um administrador cadastrar usuários e novos contatos para esse usuário.
O administrador pode cadastrar, listar, atualizar e deletar usuários e contatos.

</p>

## Rotas do Administrador

```json
[{ "baseurl": "localhost3001/" }]
```

<h2 align ='center'> Criando Administrador </h2>

Nessa aplicação o usuário pode fazer login ou se cadastrar.

`POST /register `

<h2 align ='center'> Requisição </h2>

```json
{
  {
	"name": "Fullstack",
    "email":"email@email.com",
    "password":"senha"
  }
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "uuid",
  "name": "Fullstack",
  "email": "email@email.com",
  "password": "senha criptografada"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 400`

```json
{
  "status": "error",
  "statusCode": 409,
  "message": "mensagem de erro"
}
```

Cadastrar um administrador com um email que ja existe.

` FORMATO DA RESPOSTA - STATUS 404`

```json
{
  "status": "error",
  "statusCode": 409,
  "message": "Adm email already exists"
}
```

<h2 align ='center'> Fazendo Login </h2>

`POST /login `

<h2 align ='center'> Requisição </h2>

```json
{
  {
	"name": "Fullstack",
    "password":"senha"
  }
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "token": "token"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Password or Email is incorrect"
}
```

<h2 align ='center'> Criando Usuários </h2>

`POST /users/ `

<h2 align ='center'> Requisição </h2>

```json
{
  "name": "Usuario",
  "email": "usuario@email.com",
  "phone": "9999999999"
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "uuid",
  "name": "usuario",
  "email": "usuario@email.com",
  "phone": "9999999999",
  "create_at": "2022-09-28T14:25:57.724Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Email already exists"
}
```

<h2 align ='center'> Listando usuários </h2>

`GET /users/ `

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
[
  {
    "id": "uuid",
    "name": "User1",
    "email": "user1@email.com",
    "phone": "88888888",
    "create_at": "2022-09-23T03:52:27.740Z"
  },
  {
    "id": "uuid",
    "name": "User2",
    "email": "user2@email.com",
    "phone": "7777999999",
    "create_at": "2022-09-23T23:57:35.973Z"
  }
]
```

<h2 align ='center'> Listando um usuário </h2>

`GET /users/id `

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "uuid",
  "name": "usuario",
  "email": "usuario@email.com",
  "phone": "9999999999",
  "create_at": "2022-09-28T14:25:57.724Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Invalid token"
}
```

<h2 align ='center'> Atualizando um usuário </h2>

`PATCH /users/id `

<h2 align ='center'> Requisição </h2>

```json
{
  "name": "UsuarioAtuazado",
  "email": "usuario@email.com",
  "phone": "9999999999"
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "name": "UsuarioAtuazado",
  "email": "usuario@email.com",
  "phone": "9999999999"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Invalid token"
}
```

<h2 align ='center'> Deletando um usuário </h2>

`Delete /users/id `

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 200`

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Invalid token"
}
```

<h2 align ='center'> Criando Contatos </h2>

`POST /contacts/idUser/ `

<h2 align ='center'> Requisição </h2>

```json
{
  "name": "Contato",
  "email": "contato@email.com",
  "phone": "9999999999"
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "uuid",
  "name": "Contato",
  "email": "contato@email.com",
  "phone": "9999999999",
  "user": {
    "id": "uuid",
    "name": "Usuario dono do contato",
    "email": "usuario@gmail.com",
    "phone": "7777999999",
    "create_at": "2022-09-23T23:57:35.973Z"
  }
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Email already exists"
}
```

<h2 align ='center'> Listando usuários </h2>

`GET /contacts/ `

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
[
  {
    "id": "uuid",
    "name": "Contato",
    "email": "contato@email.com",
    "phone": "9999999999",
    "user": {
      "id": "uuid",
      "name": "Usuario dono do contato",
      "email": "usuario@gmail.com",
      "phone": "7777999999",
      "create_at": "2022-09-23T23:57:35.973Z"
    }
  },
  {
    "id": "uuid",
    "name": "Contato2",
    "email": "contato2@email.com",
    "phone": "9999977777",
    "user": {
      "id": "uuid",
      "name": "Usuario dono do contato",
      "email": "usuario@gmail.com",
      "phone": "7777999999",
      "create_at": "2022-09-23T23:57:35.973Z"
    }
  }
]
```

<h2 align ='center'> Listando um contato </h2>

`GET /contacts/idUser/contato/idContato `

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "uuid",
  "name": "Contato",
  "email": "contato@email.com",
  "phone": "9999999999",
  "user": {
    "id": "uuid",
    "name": "Usuario dono do contato",
    "email": "usuario@gmail.com",
    "phone": "7777999999",
    "create_at": "2022-09-23T23:57:35.973Z"
  }
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Invalid token"
}
```

<h2 align ='center'> Atualizando um contato </h2>

`PATCH /contacts/idUser/contact/idContact `

<h2 align ='center'> Requisição </h2>

```json
{
  "name": "ContatoAtuazado",
  "email": "contato@email.com",
  "phone": "9999999999"
}
```

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "name": "ContatoAtuazado",
  "email": "contato@email.com",
  "phone": "9999999999"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Invalid token"
}
```

<h2 align ='center'> Deletando um usuário </h2>

`Delete /contacts/idUser/contact/idContact `

<h2 align ='center'> Resposta de sucesso </h2>

`FORMATO DA RESPOSTA - STATUS 200`

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:

` FORMATO DA RESPOSTA - STATUS 401`

```json
{
  "status": "error",
  "statusCode": 401,
  "message": "Invalid token"
}
```

<br />
<br />
<br />
<br />
Desenvolvido por

## Daniel Leira

## [Linkedin](https://www.linkedin.com/in/leira-daniel/)
