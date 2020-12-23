import React from 'react'
import { Cards, Charts, CountryPicker} from './components'
import './App.css'
import {fetchData} from './api'
import Footer from './Footer'


class App extends React.Component {
  state={
    data: {},
    country: '',
  }

async componentDidMount() {
    const data = await fetchData();
    this.setState( {data})
  }

  handleCountryChange = async (country) => {
    //fetch the data and then set the data
    const data = await fetchData(country)
    this.setState({ data, country: country });
  }
  
  render() {
    const {data, country} = this.state; // destructuring the data

    return (
      <div className="container">
      <h1> COVID-19 TRACKER</h1>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
         <Charts data={data} country={country} />
         <Footer />
      </div>      
    )
  }
}

export default App;