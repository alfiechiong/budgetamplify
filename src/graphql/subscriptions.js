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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($username: String) {
    onCreateUser(username: $username) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($username: String) {
    onUpdateUser(username: $username) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($username: String) {
    onDeleteUser(username: $username) {
      id
      username
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateParty = /* GraphQL */ `
  subscription OnCreateParty {
    onCreateParty {
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
export const onUpdateParty = /* GraphQL */ `
  subscription OnUpdateParty {
    onUpdateParty {
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
export const onDeleteParty = /* GraphQL */ `
  subscription OnDeleteParty {
    onDeleteParty {
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
export const onCreatePartyType = /* GraphQL */ `
  subscription OnCreatePartyType {
    onCreatePartyType {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePartyType = /* GraphQL */ `
  subscription OnUpdatePartyType {
    onUpdatePartyType {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePartyType = /* GraphQL */ `
  subscription OnDeletePartyType {
    onDeletePartyType {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePartyRole = /* GraphQL */ `
  subscription OnCreatePartyRole {
    onCreatePartyRole {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePartyRole = /* GraphQL */ `
  subscription OnUpdatePartyRole {
    onUpdatePartyRole {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePartyRole = /* GraphQL */ `
  subscription OnDeletePartyRole {
    onDeletePartyRole {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExpenses = /* GraphQL */ `
  subscription OnCreateExpenses {
    onCreateExpenses {
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
export const onUpdateExpenses = /* GraphQL */ `
  subscription OnUpdateExpenses {
    onUpdateExpenses {
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
export const onDeleteExpenses = /* GraphQL */ `
  subscription OnDeleteExpenses {
    onDeleteExpenses {
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
export const onCreateIncome = /* GraphQL */ `
  subscription OnCreateIncome {
    onCreateIncome {
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
export const onUpdateIncome = /* GraphQL */ `
  subscription OnUpdateIncome {
    onUpdateIncome {
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
export const onDeleteIncome = /* GraphQL */ `
  subscription OnDeleteIncome {
    onDeleteIncome {
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
