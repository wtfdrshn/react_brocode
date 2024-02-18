
function Button() {

    const styles = {
     
        backgroundColor: "hsl(200, 100%, 50%)",
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        
    }

    return (
        <>
            <button style={styles}>Click Me!</button>
        </>
    )
}

export default Button;