import PropTypes from 'prop-types';


function UserGreeting(props) {
    
    const welcomeMessage = <h2 className="Welcome-Message">Welcome {props.username}</h2> ;
    const loginPrompt = <h2 className="Login-Prompt">Please log in to continue</h2>;

    return (
      props.isLoggedIn ? welcomeMessage: loginPrompt
    );
  }
  UserGreeting.PropTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
  }
  UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
  }
  export default UserGreeting;
  
