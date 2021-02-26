# Ikarrio ReSTful API Template

A Node ReST API template for quicker start.

# Content

This is just a mockup API for quicker project start, using `nodeJS` and `express`

# Dependencies

> cors\
> express\
> mongoose

# Dev Dependecies

> dotenv\
> eslint\
> mocha\
> nodemon\
> should\
> sinon\
> supertest

# Usage

## Architecture

> The API is a mockup for "Books Library" using design patterns and separation of layers.

## .env file

`ENV = <"TEST"> or <"PROD">`\
`PORT = <PORT> // PORT default 8080 for docsify uses 3000`\
`PROD_DATABASE_URI = "<YOUR_PRODUCTION_DATABASE>"`\
`TEST_DATABASE_URI = "<YOUR_TESTING_DATABASE>"`

## Queries

> `/api/books/`\
>
> #### Genre
>
> `/query?genre=<GENRE>`\
> Genre options:\
> `Fantasy`

> For demonstration queries are only applied on the genre property for each book.

# Testing

The API includes the following testing libraries

> `sinon` for creating mock onjects\
> `mocha` for unit tests\
> `should` as the assertion library\
> `supertest` for e2e testing (integration testing)

# References

||| <strong>&#9888; Delete this section on Production</strong>

#### Docsify

> `https://docsify.js.org/#/?id=docsify`

#### Scripts

> Install Packages\
> `npm i` or `npm install`\
> <br/>
> Run Dev Server\
> `npm run dev` \
> <br/>
> Launch Docsify\
> `npm run docsify`
