import React from 'react';
import './App.css';
import { withMaxMediumContainer } from './HOC'
import { Form } from './Components'
import { validateEmail } from './Helpers/Regex'

function App() {
  const SubscribePage = withMaxMediumContainer(Form, { field: 'Email', validate: validateEmail, action: 'Subscribe' })
  return (
    <div className="App">
      <SubscribePage />
    </div>
  );
}

export default App;
