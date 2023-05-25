import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <h1>my form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">nom</label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email</label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="form-group">
          <label htmlFor="messageInput">Message</label>
          <textarea className="form-control" id="messageInput" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default App;
