import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PropertiesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Todo {
  readonly id: string;
  readonly rented: boolean;
  readonly rent: number;
  readonly price: number;
  readonly address: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}

export declare class Properties {
  readonly id: string;
  readonly username: string;
  readonly rented: boolean;
  readonly rent: number;
  readonly price: number;
  readonly address: string;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Properties, PropertiesMetaData>);
  static copyOf(source: Properties, mutator: (draft: MutableModel<Properties, PropertiesMetaData>) => MutableModel<Properties, PropertiesMetaData> | void): Properties;
}