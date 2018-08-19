import { createContext } from 'react';

const { Provider, Consumer } = createContext({
    data: [],
    loading: false,
    selected: null,
    fetch: () => {}
});

export { Provider, Consumer };
