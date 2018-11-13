import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {colors} from "../services/colors";
import Segment from "../components/Segment";

class HeroPage extends Component {
    render() {
        return (
            <Page>
                <h3>Hero</h3>
                <section id="hero">
                    {["white", "gray", ...colors].map((color, i) => (
                        <div
                            key={i}
                            className={`hero ${color}`}
                        ><h2 style={{fontWeight: "lighter", margin: 0}}>Hero {color}</h2></div>
                    ))}
                    {colors.map((color, i) => (
                        <div
                            key={i}
                            className={`hero light ${color}`}
                        ><h2 style={{
                            fontWeight: "lighter",
                            margin: 0
                        }}>Hero Light {color}</h2></div>
                    ))}
                </section>
                <section id="hero-segments">
                    <h3 className="mt-30">Hero Segments</h3>
                    <Segment.List>
                        {["white", "gray", ...colors].map((color, i) => (
                            <Segment
                                key={i}
                                hero
                                className={`${color}`}
                            ><h2 style={{fontWeight: "lighter", margin: 0}}>Hero {color}</h2></Segment>
                        ))}
                        {colors.map((color, i) => (
                            <Segment
                                key={i}
                                hero
                                className={`light ${color}`}
                            ><h2 style={{
                                fontWeight: "lighter",
                                margin: 0
                            }}>Hero Light {color}</h2></Segment>
                        ))}
                    </Segment.List>
                </section>
                <section id="hero-inset-segments">
                    <h3 className="mt-30">Hero Inset Segments</h3>
                    {["white", "gray", ...colors].map((color, i) => (
                        <Segment
                            key={i}
                            hero
                            inset
                            className={`${color} mb-15 mt-15`}
                        ><h2 style={{
                            fontWeight: "lighter",
                            margin: 0
                        }}>Hero Inset {color}</h2></Segment>
                    ))}
                </section>
                <section id="hero-inset-segments">
                    <h3 className="mt-30">Hero with height adjustments</h3>
                    <Segment
                        hero
                        inset
                        className={`gray h-100 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-100</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light primary h-75 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-75</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light secondary h-50 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-50</h2></Segment>
                    <Segment
                        hero
                        inset
                        className={`light b-primary h-25 mb-15 mt-15`}
                    ><h2 style={{
                        fontWeight: "lighter",
                        margin: 0
                    }}>Hero h-25</h2></Segment>
                </section>
            </Page>
        );
    }
}

export default HeroPage;
