/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      rented
      rent
      price
      address
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      rented
      rent
      price
      address
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      rented
      rent
      price
      address
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createProperties = /* GraphQL */ `
  mutation CreateProperties(
    $input: CreatePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    createProperties(input: $input, condition: $condition) {
      id
      username
      rented
      rent
      price
      address
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateProperties = /* GraphQL */ `
  mutation UpdateProperties(
    $input: UpdatePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    updateProperties(input: $input, condition: $condition) {
      id
      username
      rented
      rent
      price
      address
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteProperties = /* GraphQL */ `
  mutation DeleteProperties(
    $input: DeletePropertiesInput!
    $condition: ModelPropertiesConditionInput
  ) {
    deleteProperties(input: $input, condition: $condition) {
      id
      username
      rented
      rent
      price
      address
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
