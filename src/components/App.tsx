import { Provider } from 'react-redux';
import { store } from '../state';
import { RepositoriesList } from './RepositoriesList';

export const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>Search for a package</h2>
        <RepositoriesList />
      </div>
    </Provider>
  );
};
