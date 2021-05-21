import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Todo {
  readonly id: string;
  readonly name: string;
  readonly description?: string;
  readonly username?: String;
  constructor(init: ModelInit<Todo>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo>) => MutableModel<Todo> | void): Todo;
}

export declare class User {
  readonly id: string;
  readonly username: string;
  readonly description?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Party {
  readonly id: string;
  readonly party_role_id?: PartyRole;
  readonly party_type_id?: PartyType;
  readonly entity_id: string;
  constructor(init: ModelInit<Party>);
  static copyOf(source: Party, mutator: (draft: MutableModel<Party>) => MutableModel<Party> | void): Party;
}

export declare class PartyRole {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  constructor(init: ModelInit<PartyRole>);
  static copyOf(source: PartyRole, mutator: (draft: MutableModel<PartyRole>) => MutableModel<PartyRole> | void): PartyRole;
}

export declare class PartyType {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  constructor(init: ModelInit<PartyType>);
  static copyOf(source: PartyType, mutator: (draft: MutableModel<PartyType>) => MutableModel<PartyType> | void): PartyType;
}

export declare class Expenses {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly userId: string;
  readonly amount: string;
  readonly description?: string;
  readonly date: string;
  constructor(init: ModelInit<Expenses>);
  static copyOf(source: Expenses, mutator: (draft: MutableModel<Expenses>) => MutableModel<Expenses> | void): Expenses;
}

export declare class Income {
  readonly id: string;
  readonly name: string;
  readonly userId: string;
  readonly amount: string;
  readonly category: string;
  readonly description?: string;
  readonly date: string;
  constructor(init: ModelInit<Income>);
  static copyOf(source: Income, mutator: (draft: MutableModel<Income>) => MutableModel<Income> | void): Income;
}