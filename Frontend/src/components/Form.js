//eslint-disable-next-line
import React, {Component} from 'react';
import {API} from '../api-service.js';

export class BForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      cust_name: '',
      cust_phone: '',
      cust_mail: '',
      cust_address: '',
      Salesman_id: '',
      Bike_name: '',
      Bike_model: '',
      Bike_color: '',
      Bike_price: ''
    }
  }
  changeHandler = e =>{
    this.setState({[e.target.name]:e.target.value})
  }
  submitHandler = e =>{
    e.preventDefault()
    console.log(this.state)
    API.createForm(this.state)
    .then(res => {console.log(res)})
    .catch(error => {console.log(error)})
  }
  render() {
    const {cust_name,cust_phone,cust_mail,cust_address,Salesman_id,Bike_name,Bike_model,Bike_color,Bike_price} = this.state

    const box={
      float:'right',
      backgroundColor:'white',
      color:'black',
      fontWeight:'bold',
      padding:'20px 60px',
      borderRadius:'10px'
    }
    const bu_style={
      padding:'10px 20px',
      textSize:'1.5rem',
      fontWeight:'bold'
    }
    const ip_style={
      padding:'10px',
      marginLeft:'10px',
      border:'1px solid',
      borderRadius:'3px'
    }
    const inner_div={
      margin:'10px 0'
    }
    const lab={
      display:'inline-block',
      width:'150px'
    }
    const but_div={
      margin:'20px auto 0',
      float:'right'
    }

  return (
    <div style={box}>
    <form onSubmit={this.submitHandler}>
      <div style={inner_div}>
        <label style={lab} htmlFor="Cname">Customer Name</label>
        <input
        style={ip_style}
        id="Cname"
        type="text"
        placeholder="Name"
        name="cust_name"
        value={cust_name}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Cphone">Customer Phone</label>
        <input
        style={ip_style}
        id="Cphone"
        type="number"
        placeholder="Phone"
        name="cust_phone"
        value={cust_phone}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Cmail">Customer Mail</label>
        <input
        style={ip_style}
        id="Cmail"
        type="Email"
        placeholder="Email"
        name="cust_mail"
        value={cust_mail}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Caddr">Customer Address</label>
        <input
        style={ip_style}
        id="Caddr"
        type="text"
        placeholder="Address"
        name="cust_address"
        value={cust_address}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Sales_id">Salesman Id</label>
        <input
        style={ip_style}
        id="Sales_id"
        type="text"
        placeholder="ID"
        name="Salesman_id"
        value={Salesman_id}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Bname">Bike Name</label>
        <input
        style={ip_style}
        id="Bname"
        type="text"
        placeholder="Bike Name"
        name="Bike_name"
        value={Bike_name}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Bmodel">Bike Model</label>
        <input
        style={ip_style}
        id="Bmodel"
        type="text"
        placeholder="Bike Model"
        name="Bike_model"
        value={Bike_model}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="Bcolor">Bike Color</label>
        <input
        style={ip_style}
        id="Bcolor"
        type="text"
        placeholder="Bike color"
        name="Bike_color"
        value={Bike_color}
        onChange={this.changeHandler}
        />
      </div>
      <div style={inner_div}>
        <label style={lab} htmlFor="BPrice">Bike Price</label>
        <input
        style={ip_style}
        id="BPrice"
        type="number"
        placeholder="Bike Price"
        name="Bike_price"
        value={Bike_price}
        onChange={this.changeHandler}
        />
      </div>
      <div style={but_div}>
        <button style={bu_style} type="submit">Submit</button>
      </div>
        </form>
    </div>
  )
}
}
export default BForm;
