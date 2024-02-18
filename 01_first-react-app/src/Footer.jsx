function Footer() {
    return (
        <>
            <hr />
            <p>{new Date().getFullYear()} &copy; My Website</p>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <hr />
        </>
    )
}

export default Footer;