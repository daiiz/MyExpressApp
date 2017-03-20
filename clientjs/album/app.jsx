import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { Title, GyazoImage, Description, Hashtags }  from './AlbumApp.jsx';


/***********************************************
   Actions, ActionCreators
 ***********************************************/



/***********************************************
   Reducers
 ***********************************************/
let albumReducer = (state, action) => {
  switch (action.type) {
    case 'SEND':
      return Object.assign({}, state, {
        value: action.value
      });
    default:
      return state;
  }
};


/***********************************************
   Store
 ***********************************************/
const initialState = {
  title: 'Scrapbox Beaver',
  gyazoImgId: '5701e777fac8da5361c4c558fd437cbb',
  description: ''
};
const store = createStore(albumReducer, initialState);


/***********************************************
  View (Container Components)
 ***********************************************/
class Album extends React.Component {
  render () {
    return (
      <div>
        <Title title={this.props.title} />
        <GyazoImage img_id={this.props.imageId} />
        <Description text={this.props.description} />
        <Hashtags />
      </div>
    );
  }
}


/***********************************************
   Connect to Redux
   Rendering
 ***********************************************/
let mapStateToProps = (state) => {
  console.log(state);
  return {
    title: state.title,
    imageId: state.gyazoImgId,
    description: state.description
  };
};


let mapDispatchToProps = (dispatch) => {
  return {
    onClick(value) {
      //dispatch(send(value));
    }
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Album);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);