import React, { Component } from 'react';
import './userlog.css';
class UserLogin extends Component {
  state = {
    email: '',
    password: '',
  };

  inputHandler = (event) => {
    console.log(event.target.name, event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonHandler = (event) => {
    event.preventDefault();
    console.log(this.state.email.endsWith('.ru'));
    if (!this.state.email.endsWith('.ru')) {
      console.warn('Yalnız .ru domenlərinə icazə verilir.');
    }

    if (this.state.password.length < 8) {
      console.warn('Ən azı 8 simvol');
    }
  };

  render() {
    return (
      <div class="container">
        <form>
          <label>
            E-mail:
            <input
              class="input-email"
              type="text"
              name="email"
              value={this.state.name}
              onChange={this.inputHandler}
            />
          </label>

          <label>
            Password:
            <input
              class="input-email"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
            />
          </label>

          <button onClick={this.buttonHandler}>Login</button>
        </form>
      </div>
    );
  }
}

export default UserLogin;
