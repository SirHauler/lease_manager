// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Todo, Properties } = initSchema(schema);

export {
  Todo,
  Properties
};