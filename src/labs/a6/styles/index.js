/*
    Cesar Guerrero
    10/16/22
    CS5610 - Fall 2022

    Assignment A6 - React
*/

const Styles = () => {
    const colorBlack = {
        color: "black"
    }
    const padding10px = {
        padding: "10px"
    }
    const bgBlue = {
        "backgroundColor": "lightblue",
        "color": "black",
        //This is an interesting way to pull in other CSS styles
        ...padding10px
    };
    const bgRed = {
        "backgroundColor": "lightcoral",
        ...colorBlack,
        ...padding10px
    };
    //Returning our new HTML with CSS Styles
    return (
        <div>
            <h1>Styles</h1>
            <div style={{
                "backgroundColor": "lightyellow",
                "color": "black", padding: "10px"
            }}>
                Yellow background
            </div>
            <div style={bgRed}>Red background</div>
            <div style={bgBlue}>Blue background</div>
        </div>
    );
};

export default Styles;