import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
