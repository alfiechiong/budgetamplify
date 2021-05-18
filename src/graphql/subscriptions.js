/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($username: String) {
    onCreateTodo(username: $username) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($username: String) {
    onUpdateTodo(username: $username) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($username: String) {
    onDeleteTodo(username: $username) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
