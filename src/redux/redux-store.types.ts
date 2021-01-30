export interface GreetingStore {
  message: string;
}

export interface DataStore {
  greeting: GreetingStore;
}

export interface ReduxAction {
  type: string;
  payload?: any;
}
