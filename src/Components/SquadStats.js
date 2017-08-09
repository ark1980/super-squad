import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
    
    strength() {
        let strength = 0;
        this.props.heroes.forEach(element => strength += element.strength);
        return strength;
    }

    intelligence() {
        let intelligence = 0;
        this.props.heroes.forEach(element => intelligence += element.intelligence);
        return intelligence;
    }

    speed() {
        let speed = 0;
        this.props.heroes.forEach(element => speed += element.speed);
        return speed;
    }
    
    render() {
        return(
            <div>
                <h4>Squad Status</h4>
                <div>
                    <ul className="list-group">
                        <li className="list-group-item">
                            <strong>Strength : </strong> {this.strength()}
                        </li>
                        <li className="list-group-item">
                            <strong>Intelligence : </strong> {this.intelligence()}
                        </li>
                        <li className="list-group-item">   
                            <strong>Speed : </strong> {this.speed()}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        heroes: state.heroes
    };
}


export default connect(mapStateToProps, null)(SquadStats);