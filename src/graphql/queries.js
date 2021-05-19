/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParty = /* GraphQL */ `
  query GetParty($id: ID!) {
    getParty(id: $id) {
      id
      party_role_id {
        id
        name
        description
        createdAt
        updatedAt
      }
      party_type_id {
        id
        name
        description
        createdAt
        updatedAt
      }
      entity_id
      createdAt
      updatedAt
    }
  }
`;
export const listPartys = /* GraphQL */ `
  query ListPartys(
    $filter: ModelPartyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        party_role_id {
          id
          name
          description
          createdAt
          updatedAt
        }
        party_type_id {
          id
          name
          description
          createdAt
          updatedAt
        }
        entity_id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPartyType = /* GraphQL */ `
  query GetPartyType($id: ID!) {
    getPartyType(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPartyTypes = /* GraphQL */ `
  query ListPartyTypes(
    $filter: ModelPartyTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartyTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPartyRole = /* GraphQL */ `
  query GetPartyRole($id: ID!) {
    getPartyRole(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listPartyRoles = /* GraphQL */ `
  query ListPartyRoles(
    $filter: ModelPartyRoleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPartyRoles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getExpenses = /* GraphQL */ `
  query GetExpenses($id: ID!) {
    getExpenses(id: $id) {
      id
      name
      category
      partyId {
        id
        party_role_id {
          id
          name
          description
          createdAt
          updatedAt
        }
        party_type_id {
          id
          name
          description
          createdAt
          updatedAt
        }
        entity_id
        createdAt
        updatedAt
      }
      amount
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const listExpensess = /* GraphQL */ `
  query ListExpensess(
    $filter: ModelExpensesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpensess(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        category
        partyId {
          id
          entity_id
          createdAt
          updatedAt
        }
        amount
        description
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIncome = /* GraphQL */ `
  query GetIncome($id: ID!) {
    getIncome(id: $id) {
      id
      name
      partyId {
        id
        party_role_id {
          id
          name
          description
          createdAt
          updatedAt
        }
        party_type_id {
          id
          name
          description
          createdAt
          updatedAt
        }
        entity_id
        createdAt
        updatedAt
      }
      amount
      category
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const listIncomes = /* GraphQL */ `
  query ListIncomes(
    $filter: ModelIncomeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listIncomes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        partyId {
          id
          entity_id
          createdAt
          updatedAt
        }
        amount
        category
        description
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
