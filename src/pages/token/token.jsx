const Token = () => {
    // get the token from the URL's query parameter
    const token = new URLSearchParams(window.location.search).get('token');
    // display the token
    return (
        <div>
            <h1>Token is {token}</h1>
        </div>
    );
}

export default Token;
