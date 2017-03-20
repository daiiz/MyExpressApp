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
import { fetchGyazoImagesAsync, showImagePreview } from './actionCreators.jsx';


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

    case 'SHOW_IMAGE_PREVIEW':
      return Object.assign({}, state, {
        src: action.i,
        href: action.p,
        gyazoImgId: action.id
      });

    default:
      return state;
  }
};


/***********************************************
   Store
 ***********************************************/
const initialState = {
  title: 'Gyazo Album',
  href: 'https://gyazo.com/5701e777fac8da5361c4c558fd437cbb',
  gyazoImgId: '5701e777fac8da5361c4c558fd437cbb',
  src: 'https://i.gyazo.com/5701e777fac8da5361c4c558fd437cbb.png',
  description: '',
  progress: false,
  text: '',
  gyazoImages: [],
  perPage: 4
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
            href={this.props.href}
            gyazoImgId={this.props.gyazoImgId} />
          <Description text={this.props.description} />
          <Hashtags />
        </div>
        <div className="list">
          <GyazoImageList
            progress={this.props.progress}
            text={this.props.text}
            images={this.props.images}
            perPage={this.props.perPage}
            listImageClick={this.props.listImageClick}
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
  console.dir(state);
  return {
    title: state.title,
    description: state.description,
    progress: state.progress,
    src: state.src,
    href: state.href,
    gyazoImgId: state.gyazoImgId,
    images: state.gyazoImages,
    text: state.text,
    perPage: state.perPage
  };
};


let mapDispatchToProps = (dispatch) => {
  return {
    listImageClick : (image) => {dispatch(showImagePreview(image))},
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