import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Title, GyazoImage, Description, Hashtags, GyazoImageList }  from './AlbumApp.jsx';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

/***********************************************
   Actions, ActionCreators
 ***********************************************/
import { fetchGyazoImagesAsync } from './actionCreators.jsx';


/***********************************************
   Reducers
 ***********************************************/
let albumReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_GYAZO_IMAGES':
      return Object.assign({}, state, {
        progress: true,
        text: action.status
      });
    case 'SUCCESS_FETCH_GYAZO_IMAGES':
      var images = action.images;
      return Object.assign({}, state, {
        progress: false,
        text: action.status,
        gyazoImages: images
      });
    case 'FAIL_FETCH_GYAZO_IMAGES':
      return Object.assign({}, state, {
        progress: false,
        text: action.status
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
  gyazoImgUrl: 'https://i.gyazo.com/5701e777fac8da5361c4c558fd437cbb.png',
  description: '',
  progress: false,
  text: '',
  gyazoImages: []
};
const store = createStoreWithMiddleware(albumReducer, initialState);


/***********************************************
  View (Container Components)
 ***********************************************/
class Album extends React.Component {
  render () {
    return (
      <div>
        <div className="preview">
          <Title title={this.props.title} />
          <GyazoImage
            src={this.props.src}
            imgId={this.props.imgId} />
          <Description text={this.props.description} />
          <Hashtags />
        </div>
        <div className="list">
          <GyazoImageList
            progress={this.props.progress}
            text={this.props.text}
            images={this.props.images}
            loadGyazoItems={this.props.loadGyazoImages} />
        </div>
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
    description: state.description,
    progress: state.progress,
    src: state.gyazoImgUrl,
    imgId: state.gyazoImgId,
    images: state.gyazoImages,
    text: state.text
  };
};


let mapDispatchToProps = (dispatch) => {
  return {
    onClick: (value) => {/*dispatch(send(value));*/},
    loadGyazoImages: (value) => {dispatch(fetchGyazoImagesAsync(value))}
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(Album);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#app')
);