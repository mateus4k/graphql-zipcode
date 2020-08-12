# Graphql Brazilian Zip Code
> 🇧🇷 Brazilian Zip Code (CEP) Rest API Wrapper with GraphQL

[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://mateus4k.github.io/graphql-zipcode/)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)
[![GitHub issues](https://img.shields.io/github/issues/mateus4k/graphql-zipcode.svg)](https://GitHub.com/mateus4k/graphql-zipcode/issues/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)


## Docs
This project is currently using [ViaCEP](https://viacep.com.br/) Rest API under the table.

Visit the [docs here](https://mateus4k.github.io/graphql-zipcode/)

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
