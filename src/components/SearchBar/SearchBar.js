import { Component } from 'react';
import { Formik, ErrorMessage } from 'formik';
import { IconContext } from 'react-icons';
import { GiArchiveResearch } from 'react-icons/gi';
import * as Yup from 'yup';

import {
  Container,
  Header,
  FormWrp,
  InputWrp,
  ErrorMsg,
  ButtonSearch,
} from './SearchBar.styled';

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
      <Header>
        <Container>
          <Formik
            initialValues={{ search: '' }}
            onSubmit={this.searchQuery}
            validationSchema={SearchSchema}
          >
            {({ dirty, isValid }) => (
              <FormWrp>
                <InputWrp
                  name="search"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
                <ErrorMessage name="search" component={ErrorMsg} />
                <ButtonSearch type="submit" disabled={!(isValid && dirty)}>
                  <IconContext.Provider
                    value={{
                      size: '30px',
                    }}
                  >
                    <GiArchiveResearch />
                  </IconContext.Provider>
                </ButtonSearch>
              </FormWrp>
            )}
          </Formik>
        </Container>
      </Header>
    );
  }
}
