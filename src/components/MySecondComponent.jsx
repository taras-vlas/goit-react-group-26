// import React from 'react';
import { Component } from 'react'; //деструктуризували React

// class MySecondComponent extends React.Component {  //деструктуризували React
class MySecondComponent extends Component {
    //повинен реалізувати ф-цію render а вона повернути теги
    render() {
        return (
            <div className="second-component">
                <h4>second  component</h4>
                <p>jklfg djkuyt klihcxx ss</p>
                {/* <p>user name: Roha</p> */}
                <p>user name: {this.props.user.name}</p>
            </div>
        );
    
    }
}

export default MySecondComponent;