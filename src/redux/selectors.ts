import { DataStore } from "./redux-store.types";

export const getGreetingMessage = (store: DataStore) => store.greeting;
