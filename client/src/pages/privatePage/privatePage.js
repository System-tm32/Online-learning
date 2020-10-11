import React from 'react';
import { connect } from 'react-redux';
import { AccountOffice } from '../../components/accountOffice/accountOffice';

const PrivatePage = (props) => {
  return (
    <div>
      <AccountOffice name={props.name} />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    name: state.auth.name,
  };
};

export default connect(mapStateToProps)(PrivatePage);
