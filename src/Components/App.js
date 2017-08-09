import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroesList';
import SquadStats from './SquadStats'
import '../Styles/style.css';

class App extends Component {
    render() {
        return(
        <div className="App container">
            <h2 id="super-Squad" >Super Squad</h2>                        
            <div className="row">
                <div className="col-sm-4">
                    <CharacterList />
                </div>
                <div className="col-sm-4">
                    <HeroList />
                </div>
                <div className="col-sm-4">
                    <SquadStats />
                </div>
            </div>
        </div>
        )
    }
}

export default App;