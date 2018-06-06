import React from 'react';


class NameBadge extends React.Component {

    state = {
        name: ''
    }
    render(){

        console.log(this)
        console.log(this.props.name);
        console.log(this.state);

        return (
            <div>
                <section>
                    <h1>Hi, My Name Is...</h1>
                    <nav>
                        <h1>{this.state.name}</h1>
                    </nav>
                </section>

                    <input type='text' placeholder='Name' value={this.state.name} onChange={event => this.setState({name: event.target.value})} />

            </div>
        )
    }
}
export default NameBadge

