import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
    const renderSubMenu = () => props.subMenu.map((item, i) =>
        <Link to={item.href} key={i} className="dropdown-item" >{item.name}</Link>
    );
    return (
        <>

            <li className={typeof props.subMenu =="object" && 'nav-item dropdown'} >
                <Link to={props.navLink}
                    exact activeClassName="active"

                    className={typeof props.subMenu =="object" && 'nav-link dropdown-toggle'} data-toggle="dropdown">
                    {props.navName}
                </Link>
                {props.subMenu ? (typeof props.subMenu == "object" ? <div  className="dropdown-menu">{renderSubMenu()}</div> : null) : null}
            </li>
        </>
    )
}
