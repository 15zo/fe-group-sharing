import React from 'react';
import { useRoutes } from 'react-router-dom';

import { routes } from './router/router';

function App() {
  const element = useRoutes(routes);

  return <div>{element}</div>;
}

export default App;
