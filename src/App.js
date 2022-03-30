import React from 'react'
import API from './API';

class Covid extends React.Component {
  constructor() {
    super();

    this.getListOfForecasts = this.getListOfForecasts.bind(this);

    this.state = { forecast:[] }
  }

  async getListOfForecasts() {
    const response = await API.get("/api/action/datastore_search?resource_id=9de30d8d-3c0d-48ab-8c1b-4a7dc03d687a&")
    if(response.status === 200){
      console.log(response.data.result)
      this.setState(state=>{
        state.forecast=response.data.result.fields;
        return state;
      })
    }
  }

  componentDidMount() {
    this.getListOfForecasts();
  }

  render(){
    return (
      <>
      <h1>Weather forecast</h1>
      <ul>
      {this.state.forecast.map(o => 
         <li>{JSON.stringify(o)}</li>)}
      </ul>
      </>
    )
  }
}

export default Covid;