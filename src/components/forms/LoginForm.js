import React from 'react';
import {Form, Button} from "semantic-ui-react"
import Validator from "validator";
import InlineError from '../messages/InlineError'

class LoginForm extends React.Component {
state = {
  data : {
    email : {},
    password : {}
  },
  errors : {},
  loading : false
}


onChange = e => this.setState({data : {...this.state.data, [e.target.name]: e.target.value}});

onSubmit = () => {
  const errors = this.validate(this.state.data);
  this.setState({errors})
}

validate = (data) => {
  const errors = {};
  if (!data.password) errors.password = "can't be blank";
  if (!Validator.isEmail(data.email)) errors.email = "Invalid Email";
  return errors;
}

render () {
  const {data, errors} = this.state;
  return (
      <Form onSubmit={this.onSubmit}>
      <Form.Field error={!!errors.email}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="example@example.com" onChange={this.onChange} value={data.email}/>
        {errors.email && <InlineError text={errors.email} />}
      </Form.Field>
      <Form.Field error={!!errors.password}>
        <label htmlFor="password">password</label>
        <input type="password" name="password" id="password" placeholder="your password" onChange={this.onChange} value={data.password}/>
        {errors.password && <InlineError text={errors.password} />}
      </Form.Field>
      <Button primary>Login</Button>
      </Form>
    )
  }
}

export default LoginForm;
