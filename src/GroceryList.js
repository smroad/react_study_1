import React, {Component} from 'react';
import ReactDOM  from 'react-dom'

class GroceryList extends Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1" name="Bread">Bread0</ListItem>
                <ListItem quantity="6" name="Eggs">Eggs0</ListItem>
                <ListItem quantity="2" name="Milk">Milk0</ListItem>
            </ul>
        )
    }
}

class ListItem extends Component {
    render() {
        return (
            <li>{this.props.quantity}-{this.props.children}-{this.props.name} </li>
        );
    }
}

ReactDOM.render(<GroceryList/>, document.getElementById('root'));