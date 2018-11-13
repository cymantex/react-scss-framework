import React, {Component} from "react";
import {routes} from "../routes";
import HidingMenu from "../components/HidingMenu";
import {joinClassNames} from "../services/className";
import {withRouter} from 'react-router-dom';

class MainMenu extends Component {
    withoutRouterExtras = ({history, match, staticContext, ...props}) => props;

    render(){
        const {
            className,
            location,
            ...props
        } = this.withoutRouterExtras(this.props);
        
        return (
            <HidingMenu
                id="main-menu"
                vertical
                breakpoint="md"
                containerProps={{
                    className: "fixed-md w-100-md"
                }}
                mobileMenuProps={{
                    className: joinClassNames("b-dark-gray w-100-md", className)
                }}
                mobileMenuItemClass="grow"
                className={joinClassNames("b-dark-gray", className)}
                {...props}
            >
                <h3 className="effectless menu-item">
                    <a href={routes.homePage}>
                        SCSS Framework
                    </a>
                </h3>
                <a href={routes.alertsPage} 
                   className={location.pathname === routes.alertsPage ? "active" : ""}>
                    Alerts
                </a>
                <a href={routes.blockquotePage} 
                   className={location.pathname === routes.blockquotePage ? "active" : ""}>
                    Blockquote
                </a>
                <a href={routes.buttonsPage} 
                   className={location.pathname === routes.buttonsPage ? "active" : ""}>
                    Buttons
                </a>
                <a href={routes.formsPage} 
                   className={location.pathname === routes.formsPage ? "active" : ""}>
                    Forms
                </a>
                <a href={routes.headingPage} 
                   className={location.pathname === routes.headingPage ? "active" : ""}>
                    Heading
                </a>
                <a href={routes.heroPage} 
                   className={location.pathname === routes.heroPage ? "active" : ""}>
                    Hero
                </a>
                <a href={routes.loadersPage} 
                   className={location.pathname === routes.loadersPage ? "active" : ""}>
                    Loaders
                </a>
                <a href={routes.menusPage} 
                   className={location.pathname === routes.menusPage ? "active" : ""}>
                    Menus
                </a>
                <a href={routes.messagesPage} 
                   className={location.pathname === routes.messagesPage ? "active" : ""}>
                    Messages
                </a>
                <a href={routes.segmentsPage} 
                   className={location.pathname === routes.segmentsPage ? "active" : ""}>
                    Segments
                </a>
                <a href={routes.tablesPage} 
                   className={location.pathname === routes.tablesPage ? "active" : ""}>
                    Tables
                </a>
            </HidingMenu>
        );
    }
}

export default withRouter(MainMenu);