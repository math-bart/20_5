import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addCountry } from '../actions/actions-countries';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            currency:'',
            populace:'',
            capital:'',
            url:'',
            continent:'Asia'
        };
    }
	
    addCountry(name, currency, populace, capital, continent, imageUrl) {
        this.props.dispatch(addCountry(name, currency, populace, capital, continent, imageUrl));
    }
	
	render() {
        return (
           <div>
	        <form className={'addForm'}>
              <div className="form-group">
                <label>Country Name</label>
                <input className="form-control" placeholder="Name" onChange={(event)=> this.setState({name: event.target.value})}/>
              </div>
	          <div className="form-group">
                 <label>Currency</label>
                 <input className="form-control" placeholder="currency" onChange={(event)=> this.setState({currency: event.target.value})}/>
              </div>
	          <div className="form-group">
                <label>Populace</label>
                <input className="form-control" placeholder="populace" onChange={(event)=> this.setState({populace: event.target.value})}/>
              </div>
              <div className="form-group">
                <label>Capital</label>
                <input  className="form-control" placeholder="capital" onChange={(event)=> this.setState({capital: event.target.value})}/>
              </div>
	          <div className="form-group">
                <label>imageUrl</label>
                <input className="form-control" placeholder="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Flag_of_Algeria.svg/900px-Flag_of_Algeria.svg.png" onChange={(event)=> this.setState({url: event.target.value})}/>
               </div>
	          <div className="form-group">
                <label>Continent</label>
                <select className={'addSelect'} value={this.state.continent} onChange={(event)=> this.setState({continent: event.target.value})}>
                  <option value="Europa">Europe</option>
                  <option value="Afryka">Africa</option>
		          <option value="Asia">Asia</option>
                  <option value="North America">North America</option>
                </select >
	          </div>
              <button onClick={(event)=> { this.addCountry(this.state.name, this.state.currency, this.state.populace, this.state.capital, this.state.continent, this.state.url); }} type="submit" className="btn btn-primary"><Link to="/countries">Submit</Link></button>
            </form>
          </div>
        )
    }
}

const mapStateToProps = function (store) {
    return {
        countries: store.countriesReducer.countries
    };
};

export default connect(mapStateToProps)(Add);