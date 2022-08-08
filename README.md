# Inicialização 

Para executar o projeto, instale primeiro as dependências com o comando

```js
   npm install
```

E depois execute o comando que inicializa o servidor:

```js
   npm run server 
```

# Backend API para a etapa avaliativa 3

O backend da aplicação de E_COMMERCE está sendo hospedada na porta 5000 localmente. O caminho padrão da rota é *localhost:5000/api*

Existe, na API, 4 rotas fundamentais para a aplicação, são elas:

- **/products**
- **/users**
- **/payment**
- **/person**

A arquitetura padrão é a **MVC**, contendo a view para as interfaces das rotas, o "model" para a schema do banco de dados, e o "controller" que controla a comunicação entre o banco e as rotas. 

Baseado no diagrama de classes, definimos os objetos/entidades que estarão contidas na nossa aplicação. Os **DTOs** provém dos schemas, isto é, a transferência de dados entre objetos é feito pela modelagem do objeto no banco. Portanto, o controller usará os schemas como DTO e implementará os DAOs conforme cada rota. 

# Testes com JEST

Caso for testar a aplicação a partir do módulo JEST, use o comando:

```{javascript}
   npm run test
```

Mas antes certifique-se de que os ids em updates/delete estão de acordo com o ID do objeto. Pois após a atualização ou remoção do banco, irá da erro. Então, cada vez que roda o teste, é necessário atualizar o valor.