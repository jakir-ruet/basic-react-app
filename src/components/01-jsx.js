import React from "react";

const Jsx = () => {
    //html pattern
    const elementHtml = <h1 className="classJsx">Hello, JSX</h1>;
    console.log(elementHtml)

    //jsx syntax
    const elementJsx = React.createElement(
        'h2',
        {className: 'classJsxForm'},
        'Hello, react JSX Pattern'
    );
    console.log(elementJsx)
    return(
        <div>
            {elementHtml}
            {elementJsx}
        </div>
    )
}

export default Jsx;