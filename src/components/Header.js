import React from 'react';

const Header = () => {
    return(
        <div className="ui pointing menu">
            <a href="/react" className="active item">
                React
            </a>
            <a href="/html-css" className="item">
                HTML/CSS
            </a>

            <a href="/node" className="item">
                Node
            </a>

        </div>
    );
}


export default Header;