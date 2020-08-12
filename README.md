# Graphql Brazilian Zip Code
> 🇧🇷 Brazilian Zip Code (CEP) Rest API Wrapper with GraphQL

This project is currently using [ViaCEP](https://viacep.com.br/) Rest API under the table.

## Docs
Visit [mateus4k.github.io/graphql-zipcode](https://mateus4k.github.io/graphql-zipcode/)

## Usage example
![playground](https://user-images.githubusercontent.com/30202634/89843648-b55ea700-db4f-11ea-9996-3f43d39c7c75.png)

## Type details
```ts
{
    cep: String
    logradouro: String
    complemento: String
    bairro: String
    localidade: String
    uf: String
    unidade: String
    ibge: String
    gia: String
}
```

## Setup
```sh
git clone https://github.com/mateus4k/graphql-zipcode/
cd graphql-zipcode
yarn
yarn dev
```
