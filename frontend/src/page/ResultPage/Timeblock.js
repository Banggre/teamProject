import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Table.scss'

class TimeBlock extends React.Component {
  constructor(props) {
    super(props);
    this.handle =  this.props.onhandle;
    this.state ={
      color: "",
      opacity:"",
      opacity2:"0.5",
      color2: "#FFB0CF",
      color3 : "#A4C3FF",
      isdeleted: false,
    }
  }
  async onClick1  () {
    if (this.state.color === ""){
      await this.setState({color:"#FFB0CF", opacity:"0.5"})}
    else{this.setState({color:"", opacity:""})}
    await this.handle()
  }
  async onClick2 () {
    this.props.displayLecture.deleted = !this.props.displayLecture.deleted
    this.props.remove(this.props.displayLecture)
  } 

  render() {

    const { displayLecture } = this.props;
    if (displayLecture) {
      const {
        subject,
        professor,
        location,
        isRequired,
        url,
        deleted
      } = displayLecture;
      return (
        
        <td className={"test"} style={deleted? {backgroundColor:"gray"}:isRequired ? { backgroundColor: '#FF5675' } : subject ? { backgroundColor: this.state.color3} : { backgroundColor: this.state.color2, opacity:this.state.opacity2}}  >
          
            {deleted?
            <IconButton color="primary" aria-label="add to shopping cart" onClick={()=>{this.onClick2(subject);}}>
            <AddShoppingCartIcon />
          </IconButton>
          :
          <IconButton aria-label="delete" onClick={()=>{this.onClick2(subject);}}>
          <DeleteIcon /></IconButton>}
  

          <a href={url} target="_blank"><span className="lecture-name">
            {subject}
          </span>
          <span className="lecture-info">
            {professor}
            {professor && location ? ' · ' : ''}
            
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
