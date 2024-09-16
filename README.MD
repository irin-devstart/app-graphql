server ::::
install global: tsc yarn global add typescript
cd server
yarn init

tsc --init
yarn add typescript ts-node express cors nodemon
install type

yarn add @types/cors @types/express @types/node

config dikit
"target": "es6",  
"experimentalDecorators": true,
"emitDecoratorMetadata": true,  
"rootDir": "./src",
"strictPropertyInitialization": true,

install pakage qraphql
yarn add typeorm mysql2 graphql express-graphql

Client ::::
yarn create react-app . --template typescript

yarn add @apollo/client graphql


