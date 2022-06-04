# Praise-Delivery

[![typescript](https://img.shields.io/badge/typescript-4.3.5-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![postgres](https://img.shields.io/badge/postgres-8.6.0-326690?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![prisma](https://img.shields.io/badge/prisma-%5E3.14.0-brightgreen)](https://www.prisma.io/)


API de Entregas , desenvolvida durante o Ignite de NodeJS da Rocketseat.


---

### Instalando as dependências

```
$ yarn
```
Ou:
```
$ npm install
```

### **Configurando Banco de dados**
A aplicação usa um único banco de dados: [Postgres](https://www.postgresql.org/). Para a configuração mais rápida é recomendado usar [docker-compose](https://docs.docker.com/compose/), basta fazer o up de todos os serviços:
```
$ docker-compose up -d
```

### Postgres
Responsável por armazenar os dados da API. Se por algum motivo você quiser criar um contêiner Postgres em vez de usar `docker-compose`, poderá fazê-lo executando o seguinte comando:
```
$ docker run --name rentx-postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```
> Em seguida no _Postgres_, crie um bancos de dados: `praise-delivery`.

### Migrations
Lembre se de rodar a migrations do prisma bem como a inicialização do prisma:
```
$ yarn prisma generate
$ yarn prisma migrate dev

## `.env`
Neste arquivo, você deve configurar sua conexão do banco de dados  do Postgres
No diretório raiz crie um arquivo .env e então insira suas configurações.

---


### **Rodando a aplicação**
Para iniciar a aplicação rode o comando abaixo.
```
$ yarn dev:server
```
Ou:
```
npm run dev:server
```

---
