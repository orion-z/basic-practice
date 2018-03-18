import React, { Component } from 'react';

class CreationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      id: '',
      message: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.id === '' || this.state.message === '') {
      document.getElementById('err').textContent = 'All fields must be filled.';
      return false;
    } else {
      document.getElementById('err').textContent = '';
    }
    this.props.handleSubmit(this.state, e);
    this.setState({
      name: '',
      id: '',
      message: ''
    })
  }

  handleChange = (field, e) => {
    this.setState({[field]: e.target.value.toString()})
    e.preventDefault();
  }
  
  render() {
    return (
      <div className="creation">
        <h1>Shout something!</h1>
        <form onSubmit={this.onSubmit}>
          <div className="row">
            <div className="form-group col-sm-6">
              <label>Name</label>
              <input type="text" value={this.state.name} onChange={(e) => this.handleChange('name', e)} className="form-control" id="name" placeholder="Enter your name..." />
            </div>
            <div className="form-group col-sm-6">
              <label>ID</label>
              <input type="text" value={this.state.id} onChange={(e) => this.handleChange('id', e)} className="form-control" id="id" placeholder="Enter your ID..." />
            </div>
          </div>
          <div className="form-group">
            <label>Message<br /><small className="text-muted">{140 - this.state.message.length} chars left</small></label>
            <textarea className="form-control" value={this.state.message} onChange={(e) => this.handleChange('message', e)} rows="3" id="msg" placeholder="Enter your message..." maxLength="140" />
            <h3 id="err" className="text-danger"> </h3>
          </div>
          <button type="submit" id="btn" className="btn btn-primary">Shout</button>
        </form>
      </div>
    )
  }
}

export default CreationForm;
