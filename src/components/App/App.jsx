import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchImages } from 'Services/fetchImages';

export class App extends Component {
  state = {
    search: '',
    numberPage: 1,
    isHideButton: true,
    isErrorLoad: false,
  };

  handleSubmit = ({ search }) => {
    this.setState({ search, numberPage: 1 });
  };

  showButton = status => {
    this.setState({ isHideButton: status });
  };

  incrementPage = () => {
    //need scroll page

    this.setState(prevState => {
      return { numberPage: prevState.numberPage + 1 };
    });
  };

  showError = (status) => {
    this.setState({ isErrorLoad: status });
  }

  scrollWindow = () => {
    //  const { height: cardHeight } = document.
    //     querySelector(".gallery")
    //     .firstElementChild
    //     .getBoundingClientRect();    
    // //when draw new markup - do one scrol < 2 height card
    // window.scrollBy({
    //     top: cardHeight * 1.8,
    //     behavior: 'smooth',
    // });    
  }

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />

        {this.state.isErrorLoad && <Message text="status 200, but not images" />}
        
        <ImageGallery
          search={this.state.search}
          numberPage={this.state.numberPage}
          showButton={this.showButton}
          showError={this.showError}
        />

        {!this.state.isHideButton && (
          <ButtonLoadMore incrementPage={this.incrementPage} />
        )}
      </div>
    );
  }
}

const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .trim()
    .min(2, 'Need more than 2 characters!')
    .max(10, 'Less than 10 characters required!'),
});

export class SearchBar extends Component {
  searchQuery = (values, { resetForm }) => {
    this.props.handleSubmit(values);
    resetForm({ values: '' });
  };

  render() {
    return (
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={this.searchQuery}
          validationSchema={SearchSchema}
        >
          {({ dirty, isValid }) => (
            <Form>
              <Field
                name="search"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
              <ErrorMessage name="search" component="div" />
              <button type="submit" disabled={!(isValid && dirty)}>
                <span>Search</span>
              </button>
            </Form>
          )}
        </Formik>
      </header>
    );
  }
}

export const Message = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export const Loader = () => {
  return <div>now i load</div>;
};

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  // componentDidMount() {
  // skeleton
  // }

  componentDidUpdate(prevProps, _) {
    const { search, numberPage } = this.props;

    if (prevProps.search !== search || prevProps.numberPage !== numberPage) {
      fetchImages(search, numberPage)       
        .then(({ hits }) => {
          if (hits.length === 0) {
            this.setState({ images: [] }) 
            //elevate
            this.props.showError(true);
            this.props.showButton(true);
            return 
          }
          
          this.setState(prevState => {
            return { images: [...prevState.images, ...hits] };
          });
          //elevate
          this.props.showError(false);
          this.props.showButton(false);
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    return (
      <ul className='gallery'>
        {this.state.images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        ))}
      </ul>
    );
  }
}

export const ImageGalleryItem = ({ webformatURL, largeImageURL, tags }) => {
  return (
    <li>
      <img
        src={webformatURL}
        alt={tags}
        large-image={largeImageURL}
        width="200"
        height="200"
      />
    </li>
  );
};

export const ButtonLoadMore = ({ incrementPage }) => {
  return (
    <button type="button" onClick={incrementPage}>
      load more
    </button>
  );
};

export const Modal = () => {
  return (
    <div className="overlay">
      <div className="modal">
        <img src="" alt="" />
      </div>
    </div>
  );
};
