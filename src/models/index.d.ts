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
  readonly name: string;
  readonly description?: string;
  readonly username?: String;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}