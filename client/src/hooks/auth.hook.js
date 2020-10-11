import { connect } from 'react-redux';
import { useCallback } from 'react';

const useAuth = (props) => {
  const login = useCallback(() => {}, []);

  const logout = useCallback(() => {}, []);
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    userId: state.auth.userId,
    name: state.auth.name,
  };
};

export default connect(mapStateToProps)(useAuth);
