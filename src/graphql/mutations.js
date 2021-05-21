/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
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
      name
      description
      createdAt
      updatedAt
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
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const createParty = /* GraphQL */ `
  mutation CreateParty(
    $input: CreatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    createParty(input: $input, condition: $condition) {
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
export const updateParty = /* GraphQL */ `
  mutation UpdateParty(
    $input: UpdatePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    updateParty(input: $input, condition: $condition) {
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
export const deleteParty = /* GraphQL */ `
  mutation DeleteParty(
    $input: DeletePartyInput!
    $condition: ModelPartyConditionInput
  ) {
    deleteParty(input: $input, condition: $condition) {
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
export const createPartyType = /* GraphQL */ `
  mutation CreatePartyType(
    $input: CreatePartyTypeInput!
    $condition: ModelPartyTypeConditionInput
  ) {
    createPartyType(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updatePartyType = /* GraphQL */ `
  mutation UpdatePartyType(
    $input: UpdatePartyTypeInput!
    $condition: ModelPartyTypeConditionInput
  ) {
    updatePartyType(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deletePartyType = /* GraphQL */ `
  mutation DeletePartyType(
    $input: DeletePartyTypeInput!
    $condition: ModelPartyTypeConditionInput
  ) {
    deletePartyType(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createPartyRole = /* GraphQL */ `
  mutation CreatePartyRole(
    $input: CreatePartyRoleInput!
    $condition: ModelPartyRoleConditionInput
  ) {
    createPartyRole(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updatePartyRole = /* GraphQL */ `
  mutation UpdatePartyRole(
    $input: UpdatePartyRoleInput!
    $condition: ModelPartyRoleConditionInput
  ) {
    updatePartyRole(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deletePartyRole = /* GraphQL */ `
  mutation DeletePartyRole(
    $input: DeletePartyRoleInput!
    $condition: ModelPartyRoleConditionInput
  ) {
    deletePartyRole(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createExpenses = /* GraphQL */ `
  mutation CreateExpenses(
    $input: CreateExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    createExpenses(input: $input, condition: $condition) {
      id
      name
      category
      userId
      amount
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateExpenses = /* GraphQL */ `
  mutation UpdateExpenses(
    $input: UpdateExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    updateExpenses(input: $input, condition: $condition) {
      id
      name
      category
      userId
      amount
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteExpenses = /* GraphQL */ `
  mutation DeleteExpenses(
    $input: DeleteExpensesInput!
    $condition: ModelExpensesConditionInput
  ) {
    deleteExpenses(input: $input, condition: $condition) {
      id
      name
      category
      userId
      amount
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const createIncome = /* GraphQL */ `
  mutation CreateIncome(
    $input: CreateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    createIncome(input: $input, condition: $condition) {
      id
      name
      userId
      amount
      category
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const updateIncome = /* GraphQL */ `
  mutation UpdateIncome(
    $input: UpdateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    updateIncome(input: $input, condition: $condition) {
      id
      name
      userId
      amount
      category
      description
      date
      createdAt
      updatedAt
    }
  }
`;
export const deleteIncome = /* GraphQL */ `
  mutation DeleteIncome(
    $input: DeleteIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    deleteIncome(input: $input, condition: $condition) {
      id
      name
      userId
      amount
      category
      description
      date
      createdAt
      updatedAt
    }
  }
`;
