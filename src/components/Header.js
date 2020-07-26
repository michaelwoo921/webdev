import React from 'react';
import Link from './Link';

const Header = () => {
   
    return(
        <div className="ui pointing menu">
            <Link href="/webdev/react" className="active item">
                React
            </Link>
            <Link href="/webdev/html-css" className="item">
                HTML/CSS
            </Link>

            <Link href="/webdev/node" className="item">
                Node
            </Link>

        </div>
    );
}


export default Header;