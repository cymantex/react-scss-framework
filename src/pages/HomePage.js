import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {Loader} from "../components/Loader";

class HomePage extends Component {
    render() {
        return (
            <Page>
                Home
                <Loader size="huge"/>
                <Loader size="large"/>
                <Loader size="medium"/>
                <Loader size="small"/>
                <Loader size="tiny"/>
            </Page>
        );
    }
}

export default HomePage;
