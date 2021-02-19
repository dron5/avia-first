/* eslint-disable react/prop-types */
import React from 'react';
import { Checkbox } from "antd";

import { connect } from 'react-redux';
import * as actions from '../actions';

import classes from './Filter.module.scss';

const Filter = ({ all, none, one, two, three, onAll, onNone, onOne, onTwo, onThree }) => {
  console.log(all, none, one, two, three);
  return (
    <aside className={classes.Filter}>
      <span className={classes.Filter__title}>количество пересадок</span>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={all}
        onChange={onAll}>
        Все
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={none}
        onChange={onNone}>
        Без пересадок
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={one}
        onChange={onOne}>
        1 пересадка
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={two}
        onChange={onTwo}>
        2 пересадки
      </Checkbox>
      <Checkbox
        className={classes["ant-checkbox-wrapper"]}
        checked={three}
        onChange={onThree}>
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
  three: state.three
  });

export default connect(mapStateToProps, actions)(Filter);
