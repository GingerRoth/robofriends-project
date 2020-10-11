import React,{Component} from 'react';
import CardList from '../components/CardList';
import { robots } from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
//import ErrorBoundary from '../components/ErrorBoundary'
import './App.css'

class App extends Component {
    constructor() {
        super()
            this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json();
        })
        .then(users => {
            this.setState({robots: robots})
        })

    }

    OnSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
        //console.log(event.target.value);
        //console.log(FilterRobots)
    }

    render() {
        const { robots, searchfield} = this.state;

        const FilterRobots = robots.filter(robots => {
        return robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        if(robots.length === 0){
            return <h1 className="tc">Loading Robos, Please wait!</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className='f1'>Cyber Buddies</h1>

                    <SearchBox SearchChange={this.OnSearchChange}/>
                    <Scroll>
                            <CardList robots={ FilterRobots }/>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;