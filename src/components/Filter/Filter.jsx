/* eslint-disable react/prop-types */
import React from 'react';
import { Checkbox } from "antd";

import { connect } from 'react-redux';
import * as actions from '../../store/actions';

import classes from './Filter.module.scss';

const Filter = ({ searchId, all, none, one, two, three, onClick }) => {
  console.log(searchId);
  return (
    <aside className={classes.Filter}>
      <span className={classes.Filter__title}>количество пересадок</span>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={all}
        onChange={onClick}
        name="ALL"
      >
        Все
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={none}
        onChange={onClick}
        name="NONE"
      >
        Без пересадок
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={one}
        onChange={onClick}
        name="ONE"
      >
        1 пересадка
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={two}
        onChange={onClick}
        name="TWO"
      >
        2 пересадки
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={three}
        onChange={onClick}
        name="THREE"
      >
        3 пересадки
      </Checkbox>
    </aside>
  );
};

const mapStateToProps = ( state ) => ({
  all: state.all,
  none: state.none,
  one: state.one,
  two: state.two,
  three: state.three,
  searchId: state.searchId,
  });

export default connect(mapStateToProps, actions)(Filter);
