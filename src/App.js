import React,{Component} from 'react';
import ReactDOM  from 'react-dom'

class Hello extends Component {
    render(){
        var place = "中文!";
        return (
            <div>
                <h1>Hello {place}</h1>
                <div style={{color:'red'}}>
                    test!
                </div>
            </div>
        )
    }
}

ReactDOM.render(<Hello/>, document.getElementById('root'));
