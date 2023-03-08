export interface storage {
  [key: string]: any; 
}

const createLocalStorageMock = () => {
  let storage: storage = {};
  return {
    getItem: (key: string) => {
      return storage[key] ? storage[key] : null;
    },
    setItem: (key: string, value: any) => {
      storage[key] = value;
    },
  };
};

Object.defineProperty(window, 'localStorage', {
  value: createLocalStorageMock(),
});

