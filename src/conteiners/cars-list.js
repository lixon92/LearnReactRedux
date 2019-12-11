import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {select} from '../actions/index';

class CarsList extends Component {

    render() {
        return (
            <ol>
                {
                    this.props.thisCars.map((item, i) => {
                        return <li onClick={() => select(item)}
                                   key={i}>
                            {item.name}
                        </li>
                    })
                }
            </ol>
        )
    }
}

function mapStateToProps(state) {
    return {
        thisCars: state.cars
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({select: select}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CarsList)