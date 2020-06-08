import React from 'react';


class TimeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.handle =  this.props.onClick;
    this.state ={
      color: "",
      opacity:"",
      opacity2:"0.5",
      color2: "#FFB0CF"
    }
  }
  async onClick1  () {
    if (this.state.color === ""){
      await this.setState({color:"#FFB0CF", opacity:"0.5"})}
    else{this.setState({color:"", opacity:""})}
    await this.handle()
  }
  async onClick2 (name) {
    if (!name){
      if (this.state.color2 === ""){
        await this.setState({color2:"#FFB0CF", opacity2:"0.5"})}
      else{this.setState({color2:"", opacity2:""})}
      await this.handle()
     }
     else {
      if (this.state.color2 === ""){
        await this.setState({color2:"#FFB0CF", opacity2:"0.5"})}
      else{this.setState({color2:"", opacity2:""})}
     }
  }
  render() {
    const { displayLecture } = this.props;

    if (displayLecture) {
      const {
        name,
        professor,
        location,
        isRequired,
        url
      } = displayLecture;
      return (
        <td style={isRequired ? { backgroundColor: '#FF5675' } : name ? { backgroundColor: '#A4C3FF'} : { backgroundColor: this.state.color2, opacity:this.state.opacity2}}  onClick={()=>{this.onClick2(name);}}>
          <a href={url} target="_blank"><span className="lecture-name">
            {name}
          </span>
          <span className="lecture-info">
            {professor}
            {professor && location ? ' · ' : ''}
            {location}
            
          </span></a>
        </td>
      );
    }

    return (
      <td style={{ backgroundColor: this.state.color, opacity: this.state.opacity}}className="unit" onClick={()=>this.onClick1()}/>
    );
  }
}

export default TimeBlock;
