## Cypress

The following command in Cypress will visit a specified URL, which then allows you to interact with elements on the page.

```typescript
cy.visit
```

The following Cypress method allows you to intercept and modify network requests.

```typescript
cy.intercept()
```

The following Cypress method make an HTTP request on behalf of the web application and get the response from the API server

- In other words, it checks the endpoints on an actual running server without having to start the front-end application.

```typescript
cy.request()
```

While not specific to only Cypress, the following function is used to define a single, individual test case within a test suite in a descriptive string.

- It also explains what the test should verify.

- It is a core building block for structuring your test cases within a describe block, allowing you to clearly describe what each test is meant to do.

```typescript
it()
```

The following attribute in Cypress gives you a unique selectors to HTML elements, which makes it easier and more reliable to target them in tests.

```typescript
data-cy
```

The following cy object method that is used to select one or more elements from the DOM (Document Object Model) to interact with or assert against.

- It allows you to target elements based on CSS selectors or attributes, enabling you to perform actions or validations on those elements.

```typescript
cy.get()
```

To run Cypress in an IDE like VS Code. You would run the following command.

```shell
npx cypress open
```

You can run the following command to install Cypress as a dev dependency

```shell
npm install cypress --save-dev
npm i cypress --save-dev
npm i cypress -D
```
