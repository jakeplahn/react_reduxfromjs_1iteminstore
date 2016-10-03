import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {items: props.items};
  }
  render() {
    let listGroupItems = this.state.items.map(function(item) {
        return (<ListGroupItem key={item.id}>{item.name}
          </ListGroupItem>);
    });
    return (
      <ListGroup>{listGroupItems}</ListGroup>
    );
  }
}

export default App;
