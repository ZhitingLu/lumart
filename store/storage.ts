import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Create a noop storage for server-side rendering
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

// Determine which storage to use based on the environment
const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

export default storage;