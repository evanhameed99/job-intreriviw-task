import React from 'react';
import './AddStore.css';
import { makeStyles } from '@material-ui/core/styles';
import { Input, InputLabel, FormControl, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { SetBrandName, SetDescription } from '../../actions/AddStoreActions';
import { AddBrand } from '../../actions/StoreActions';
import { v4 as uuidv4 } from 'uuid';

const styles = makeStyles((theme) => ({
  button: {
    marginLeft: 20,
  },
}));
const AddStore = () => {
  const StyleClasses = styles();
  const dispatch = useDispatch();
  const brandName = useSelector((state) => state.AddStoreReducer.name);
  const description = useSelector((state) => state.AddStoreReducer.description);

  return (
    <div className='addstore'>
      <h1 className='addstore__header'>Add Your Own Brand Here!</h1>
      <div className='addstore__form__container'>
        {' '}
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            dispatch(
              AddBrand({
                name: brandName,
                description: description,
                imageURL: '',
                id: uuidv4(),
              })
            );
            dispatch(SetBrandName(''));
            dispatch(SetDescription(''));
          }}
        >
          <FormControl>
            <InputLabel htmlFor='my-input'>Name of your brand</InputLabel>
            <Input
              id='my-input'
              aria-describedby='my-helper-text'
              value={brandName}
              onChange={(evt) => dispatch(SetBrandName(evt.target.value))}
            />
          </FormControl>
          <br />
          <FormControl>
            <InputLabel htmlFor='my-input'>Description</InputLabel>
            <Input
              id='my-input'
              aria-describedby='my-helper-text'
              value={description}
              onChange={(evt) => dispatch(SetDescription(evt.target.value))}
            />
          </FormControl>
          <br />
          <br />
          <Button variant='contained' component='label'>
            Upload Logo
            <input type='file' hidden />
          </Button>

          <Button
            color='primary'
            variant='contained'
            component='label'
            className={StyleClasses.button}
            disabled={!brandName || !description}
          >
            Add Brand
            <input type='submit' hidden />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddStore;
