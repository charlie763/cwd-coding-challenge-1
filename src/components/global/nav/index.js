import React from 'react';

class Nav extends React.Component {
    render(){
        return(
            <nav>
                <ul className='main-nav'>
                    <li>
                        <a href='/'>
                            Home
                        </a>
                    </li>
                    <li className='nav-push'>
                        <a href='/about'>
                            About
                        </a>
                    </li>
                    <li>
                        <a href='/contact'>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Nav