import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {

    render() {
        if (!this.props.thisCar) {
            return (<p>Выберите автомобиль...</p>)
        }
        return (
            <div>
                <h2>{this.props.thisCar.name}</h2>
                <img src={this.props.thisCar.img} /><br />
                <p>{this.props.thisCar.desc}</p>
                <p>Скорость: {this.props.this.thisCar.speed}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        thisCar: state.active
    }
}

export default connect(mapStateToProps)(Details)