// import React from 'react';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import MySecondComponent from './MySecondComponent';

// react повертає тільки 1 компонент-parent, тому
// є варіант:  <></>
// є варіант:  <Fragment></Fragment>
//створюємо компоненту
// const MyFirstComponent = () => {
//const MyFirstComponent = () => (
// const MyFirstComponent = (props) => (  //вказуємо що прийдуть props
const MyFirstComponent = ({ user, x }) => ( //дeструктуризували  props
// const MyFirstComponent = ({ user, x = 0 }) => ( //дeструктуризували  props    
        <Fragment>
            {/* return ( */}
          <div className="test-component">
              <h2>Test Component</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, maxime. Velit, voluptatibus repudiandae. Quos vel ullam ratione quod a excepturi sapiente debitis alias, minus officia in! Ut ex ducimus et.</p>
            {/* <p>user name: {props.user.name}</p> //дeструктуризували  props*/}
            <p>user name: { user.name }</p>  
            {/* а якщо не передано параметр x тоді за defaultProps: хочу щоб він був "0"
            тоді 2 шляхи: 1-й -якщо функціональн. компонент, то всередину пишемо ({user, x = 0}),
            2-й  */}
            <p>x: {x}</p>
           </div>
            <div>
                <p>hello</p>
            </div>
        {/* ); */}
          {/* <MySecondComponent user={props.user} /> //дeструктуризували  props*/}
          <MySecondComponent user={user} />
        </Fragment>
// };
);

MyFirstComponent.defaultProps = {
    x: 0,
};
MyFirstComponent.propTypes = {
    x: PropTypes.number,
};


export default MyFirstComponent;