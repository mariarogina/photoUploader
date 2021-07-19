import React, { Component } from 'react'

export default class Loader extends Component {

    constructor () {
        super()
        this.state = {
          files: [],
          imgSrc:'',

        }
      }
      
      _onChange = function (){
          var file = this.state.files[0];
        var reader = new FileReader();
        var url = reader.readAsDataURL(file);
      
         reader.onloadend = function (e) {
            this.setState({
                imgSrc: [reader.result],
            })
          }.bind(this);
        console.log(url) 
        
        
      }

    render () {
 return(
  <div>
    <form>
      <input 
        ref="file" 
        type="file" 
        name="user[image]" 
        multiple="true"
        onChange={this_onChange}/>
     </form>
     
     {this.state.imgs && [...this.state.imgs].map((file)=>(
       <img src={URL.createObjectURL(file)} />
    ))}
  </div>
 )
}

}
