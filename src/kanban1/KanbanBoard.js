import React, {Component} from 'react';
import List from './List';

class KanbanBoard extends Component {
    render() {
        return (
            <div className="app">
                <List id="todo"
                      cards={this.props.cards.filter((card) => card.status === "todo")}/>
                <List id="in-progress"
                      cards={this.props.cards.filter((card) => card.status === "in-progress")}/>
                <List id="done"
                      cards={this.props.cards.filter((card) => card.status === "done")}/>
            </div>
        );
    };
}
export default KanbanBoard;