import React,{Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
    constructor() {
        super()
            this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        //console.log(event.target.value);
        //console.log(FilterRobots)
    }

    render() {
              const FilterRobots = this.state.robots.filter(robots => {
              return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1 className='f1'>RoboFriends</h1>

                <SearchBox SearchChange={this.OnSearchChange}/>

                <CardList robots={ FilterRobots }/>
            </div>
        );
    }
}

export default App;