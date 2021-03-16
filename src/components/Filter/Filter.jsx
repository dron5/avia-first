/* eslint-disable react/prop-types */
import React from "react";
import { Checkbox } from "antd";

import { connect } from "react-redux";
import * as actions from "../../store/actions";

import classes from "./Filter.module.scss";

const Filter = ({ all, none, one, two, three, onClick }) => (
  <aside className={classes.filter}>
    <span className={classes.filter__title}>количество пересадок</span>
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

const mapStateToProps = (state) => ({
  all: state.filteReduser.all,
  none: state.filteReduser.none,
  one: state.filteReduser.one,
  two: state.filteReduser.two,
  three: state.filteReduser.three,
  searchId: state.filteReduser.searchId,
});

export default connect(mapStateToProps, actions)(Filter);
