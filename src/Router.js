import React, {Fragment} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import AlertsPage from "./pages/AlertsPage";
import BlockquotePage from "./pages/BlockquotePage";
import ButtonsPage from "./pages/ButtonsPage";
import CodePage from "./pages/CodePage";
import FormsPage from "./pages/FormsPage";
import HeadingPage from "./pages/HeadingPage";
import HomePage from "./pages/HomePage";
import LoadersPage from "./pages/LoadersPage";
import MenusPage from "./pages/MenusPage";
import MessagesPage from "./pages/MessagesPage";
import SegmentsPage from "./pages/SegmentsPage";
import TablesPage from "./pages/TablesPage";
import {routes} from "./routes";

export const Router = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Route exact path={routes.alertsPage} component={AlertsPage}/>
                <Route exact path={routes.blockquotePage} component={BlockquotePage}/>
                <Route exact path={routes.buttonsPage} component={ButtonsPage}/>
                <Route exact path={routes.codePage} component={CodePage}/>
                <Route exact path={routes.formsPage} component={FormsPage}/>
                <Route exact path={routes.headingPage} component={HeadingPage}/>
                <Route exact path={routes.homePage} component={HomePage}/>
                <Route exact path={routes.loadersPage} component={LoadersPage}/>
                <Route exact path={routes.menusPage} component={MenusPage}/>
                <Route exact path={routes.messagesPage} component={MessagesPage}/>
                <Route exact path={routes.segmentsPage} component={SegmentsPage}/>
                <Route exact path={routes.tablesPage} component={TablesPage}/>
            </Fragment>
        </BrowserRouter>
    );
};