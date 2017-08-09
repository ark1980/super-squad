import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../Actions';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.heroes.map(hero => {
              return (
                <li key={hero.id} className="list-group-item justify-content-between">
                  <div className="list-item">
                    {hero.name}
                  </div>
                   <div 
                    className="btn btn-secondary right-button list-item" 
                    onClick={() => this.props.removeCharacterById(hero.id)}
                  >
                    x
                  </div> 
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, {removeCharacterById})(HeroList);