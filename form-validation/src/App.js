import React from 'react';
import './App.css';
import { Placeholder, TextField, InlineMessage } from './components'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <tr><Placeholder value="First name" />
              <TextField placeholder="First name"/>
              <InlineMessage className="form-control is-valid" />
              </tr>
              <tr><Placeholder value="Last name" />
              <TextField placeholder="Last name"/>
              <InlineMessage className="form-control is-valid" />
              </tr>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
}

export { App }
