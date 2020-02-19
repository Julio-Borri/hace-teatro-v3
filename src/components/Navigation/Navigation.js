import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import data from '../../data';
import { connect } from 'react-redux';

import './Navigation.scss';
import Backdrop from '../Backdrop/Backdrop';

class Navigation extends Component {
  render() {
    let classesHamb = ['navbar--icon'];
    if (this.props.showMenu) {
      classesHamb.push('active');
    }

    let classesUl = ['navbar--list', 'show'];
    if (this.props.showMenu) {
      classesUl.pop();
    }

    let linksList = data.links.map((link) => {
      return (
        <li key={link.id}>
          <Link
            className='navbar--link'
            to={link.path}
            onClick={this.props.onShowMenu}
          >
            {link.label}
          </Link>
        </li>
      );
    });

    return (
      <Fragment>
        {/* <Backdrop show={this.props.showMenu} /> */}
        <div className='navbar--container'>
          <div className='navbar'>
            <div className='navbar--brand'>
              <Link className='navbar--brandLink' to='/'>
                <span className='navbar--brandLink__regular'>HACÉ </span>
                <span className='navbar--brandLink__bold'>TEATRO</span>
              </Link>
            </div>
            <ul className={classesUl.join(' ')}>{linksList}</ul>
            <div
              className={classesHamb.join(' ')}
              onClick={this.props.onShowMenu}
            >
              <div className='hamburger'></div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapstateToProps = (state) => {
  return {
    showMenu: state.showMenu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMenu: () => dispatch({ type: 'SHOWMENU' }),
  };
};

export default connect(mapstateToProps, mapDispatchToProps)(Navigation);
