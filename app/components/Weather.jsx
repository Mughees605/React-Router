var React = require("react");
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState:function(){
    return {
        isLoading:false
    }

    },
    handleSearch:function(location){
        var self = this;

         self.setState({
            isLoading:true
        })
        openWeatherMap.getTemp(location).then(function(temp){
            self.setState({
                location:location,
                temp:temp,
                isLoading:false
            })
        },
        
        function(err){
            self.setState({isLoading:false})
            alert(err);
        });
    // this.setState({
    //     location:location,
    //     temp : 77
    // })
     },
    render:function(){
        var {isLoading,temp,location} = this.state;

        function renderMessage(){
            if(isLoading){
                return <h3>Fetching Weather....</h3>
            }
            else if(temp && location){
                return <WeatherMessage location = {this.state.location} temp = {this.state.temp}/>
            }
        }
       return (
           <div>
           <h3>Get Weather</h3>
           <WeatherForm onSearch = {this.handleSearch}/>
           
           </div>
       )
    }
})
module.exports = Weather;