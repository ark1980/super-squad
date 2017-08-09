import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterById } from '../Actions';
import '../Styles/style.css';

class CharacterList extends Component {
    render() {
        return(
            <div>
                <h4>Characters</h4>
                <ul className="list-group">
                    {this.props.characters.map(character => {
                        return(
                        <li key={character.id} className="list-group-item justify-content-between">
                            <div className="list-item" >{character.name}</div>
                            <div className="btn btn-secondary right-button list-item" 
                                onClick={() => this.props.addCharacterById(character.id)} 
                            >                               
                            +
                            </div>
                        </li>
                        )
                    })}
                </ul>  
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        characters: state.characters
    };
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({addCharacterById}, dispatch)
// }


export default connect(mapStateToProps, { addCharacterById })(CharacterList);