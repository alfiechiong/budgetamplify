// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, User, Party, PartyRole, PartyType, Expenses, Income } = initSchema(schema);

export {
  Todo,
  User,
  Party,
  PartyRole,
  PartyType,
  Expenses,
  Income
};