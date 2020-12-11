import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import contactListStyles from './ContactList.module.css';
import { deleteContact } from '../../redux/contactList//contactListActions';

const ContactList = ({ toUpdate, onDelete }) => {
  return (
  <TransitionGroup component="ul" className={contactListStyles.ul}>
      {toUpdate.map(el => {
        const { name, number, id } = el;
        return (
          <CSSTransition key={id} in timeout={250} unmountOnExit classNames={contactListStyles}>
          <li  key={id} className={contactListStyles.li}>
           <span className={contactListStyles.span}> {name}: {number}</span>
            <button className={contactListStyles.button} type="button" onClick={() => onDelete(id)}>
              X
            </button>
          </li>
          </CSSTransition>
        );
      })}
  </TransitionGroup>
  );
};

const mapStateToProps = state => ({
  toUpdate: state.contactsReducer.contacts.filter(contact => contact.name.toLowerCase().includes(state.contactsReducer.filter.toLowerCase())),
});

const mapDispatchToProps = {
  onDelete: deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  toUpdate: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
