function Button() {

    // const handleClick = () => console.log('Clicked!');
    // const handleClickWithParam = (name) => console.log(`${name} stop clicking me!`);

    // let count = 0;

    // const handleClick = (name) => {
    //     count++;

    //     if (count <= 3) {
    //         console.log(`${name} you clicked me ${count} times!`);
    //     } else {
    //         console.log(`${name} stop clicking me!`);
    //     }   
    // }

    const handleClick = (e) => e.target.innerText = 'Clicked! 😭';

    const handleClickwithImg = (e) => e.target.style.display = 'none';

    return (
        <>
        <button onClick={(e) => handleClick(e)}>Click Me! 🥲</button>
        <img onClick={(e) => handleClickwithImg(e)} src="https://media.giphy.com/media/3o7aDcz3u24RLHwv5a/giphy.gif" alt="" />
        </>
    )
}

export default Button;