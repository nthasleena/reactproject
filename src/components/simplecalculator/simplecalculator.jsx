import React, { Component } from 'react';
import './simplecalculator.css';
class SimpleCalculator extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            current_num:"",
            previous_num:"",
            input:"",
            operator:"" 
        }
    }

    handleInputChange= val=> {
       //this.state.input="";
       this.setState({input:this.state.input+val.target.name})
    }
    

   decimal=val=>{
    if(this.state.input.indexOf('.')===-1)   
    {
       this.setState({input:this.state.input+val.target.name})
    }
       
   }
    // ES 6 function expression
    add=()=> {
        this.state.previous_num=this.state.input;
        this.setState({input:""});
        this.state.operator="+";
    }
    sub=()=> {
        this.state.previous_num=this.state.input;
        this.setState({input:""});
        this.state.operator="-";
    }
    div=()=> {
        this.state.previous_num=this.state.input;
        this.setState({input:""});
        this.state.operator="/";
    }
    mult=()=> {
        this.state.previous_num=this.state.input;
        this.setState({input:""});
        this.state.operator="*";
    }
    subst=()=> {
        let result = parseInt(this.state.num1) - parseInt(this.state.num2);
        this.setState({result:result});
    }
    clear=()=> {
       
        this.setState({input:""});
    }
    calulation_result=()=>{
        
        this.state.current_num=this.state.input;
        switch(this.state.operator) {
            case "+":
              // code block
              this.setState({input:parseInt(this.state.previous_num) + parseInt(this.state.current_num)});
              break;
            case "-":
              // code block
              this.setState({input:parseInt(this.state.previous_num) - parseInt(this.state.current_num)});
              break;
            case "*":
                // code block
                this.setState({input:parseInt(this.state.previous_num) * parseInt(this.state.current_num)});
                break;
            case "/":
                // code block
                this.setState({input:parseInt(this.state.previous_num) / parseInt(this.state.current_num)});
                break;
            default:
              // code block
          }
        
    }


    render() { 
        return (
            <div className="calculator card">
                <input type="text" class="calculator-screen z-depth-1" readOnly value={this.state.input}  ></input><br/>
                <div class="calculator-keys">
                <button className="operator btn btn-info" type="button" name="+" onClick={this.add.bind(this)}>+</button>
                <button className="operator btn btn-info"  type="button" name="-" onClick={this.sub.bind(this)}>-</button>
                <button className="operator btn btn-info" type="button" name="*" onClick={this.mult.bind(this)}>x</button>
                <button className="operator btn btn-info" type="button" name="/" onClick={this.div.bind(this)}>÷</button>

                <button className="btn btn-light waves-effect btn-outline-dark " name="1" onClick={this.handleInputChange.bind(this)}>1</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="2" onClick={this.handleInputChange.bind(this)} >2</button>
                <button className="btn btn-light  btn-outline-dark" name="3" onClick={this.handleInputChange.bind(this)}>3</button>


                <button className="btn btn-light waves-effect btn-outline-dark" name="4" onClick={this.handleInputChange.bind(this)}>4</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="5" onClick={this.handleInputChange.bind(this)}>5</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="6" onClick={this.handleInputChange.bind(this)}>6</button>
                

                <button className="btn btn-light waves-effect btn-outline-dark" name="7" onClick={this.handleInputChange.bind(this)}>7</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="8" onClick={this.handleInputChange.bind(this)}>8</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="9" onClick={this.handleInputChange.bind(this)}>9</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="0" onClick={this.handleInputChange.bind(this)}>0</button>


                <button className="btn btn-light waves-effect btn-danger btn-sm btn-outline-dark " name="." onClick={this.decimal.bind(this)}>.</button>
                <button className="btn btn-light waves-effect btn-outline-dark" name="." onClick={this.clear.bind(this)}>C</button>
                
                <button className="equal-sign operator btn  btn-outline-dark" name="=" onClick={this.calulation_result.bind(this)} >=</button>
                
                </div>
            </div>
        );
    }
}
 
export default SimpleCalculator;