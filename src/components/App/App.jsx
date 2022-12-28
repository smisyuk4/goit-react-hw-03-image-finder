import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { fetchImages } from 'Services/fetchImages';

export class App extends Component {
  state = {
    search: '',
    isHideButton: false,
  };

  handleSubmit = ({ search }) => {
    this.setState({ search });
  };

  render() {
    return (
      <div>
        <SearchBar handleSubmit={this.handleSubmit} />
        {/* <Message text="we are work" /> */}
        <ImageGallery search={this.state.search} />
        <ButtonLoadMore />
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
          <Form>
            <Field
              name="search"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <ErrorMessage name="search" component="div" />
            <button type="submit">
              <span>Search</span>
            </button>
          </Form>
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      fetchImages(this.props.search)
        .then(({ hits }) => this.setState({ images: hits }))
        .catch(error => console.log(error));
    }
  }

  render() {
    console.log(this.state.images);
    return (
      <ul>
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

export const ImageGalleryItem = ({webformatURL, largeImageURL, tags}) => {
  return (
    <li>
      <img src={webformatURL} alt={tags} large-image={largeImageURL} width="200" height="200"/>
    </li>
  );
};

export const ButtonLoadMore = () => {
  return <button type="button">load more</button>;
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
