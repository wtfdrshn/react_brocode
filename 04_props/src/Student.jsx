// Props are used to pass data from one component to another component.
// PropType is used to validate the props passed to a component.
// Default props are used to set default values for props.

import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/* Props doesn't directly display Boolean values so use a ternary operator as shown below*/}
            <p>Student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    )
}   

//Optional: You can also define the prop types and default props outside the component as shown below

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired
}

Student.defaultProps = {    
    name: "Default Name",
    age: 0,
    isStudent: false
}

export default Student;