import ProtoTypes from 'prop-types';

function UserGreeting(props) {
    const { isLogged, name } = props;
    const welcome_message = <h2 className='welcome-message'>Welcome back, {name}</h2>;
    const login_message = <h2 className='login-message'>Please login to continue</h2>;
    return(
        isLogged ? welcome_message : login_message
    )
}

UserGreeting.propTypes = {
    isLogged: ProtoTypes.bool,
    name: ProtoTypes.string,
}


export default UserGreeting;