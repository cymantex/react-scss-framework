import React, {Component} from "react";
import {Page} from "../site-components/Page";
import {BouncingCheckbox, AndroidCheckbox} from "../components/Checkboxes";
import {darkColors} from "../services/colors";
import {AnimationDropdown} from "../components/AnimationDropdown";
import Form from "../components/Form";

class FormsPage extends Component {
    state = {
        animation: "fadeIn",
        animationKey: 0
    };

    render(){
        return (
            <Page>
                <h2>Forms</h2>
                <hr/>
                <Form className="container-4 mb-30">
                    <Form.Columns>
                        <label>Normal</label>
                        <input type="text" placeholder="placeholder"/>
                        <label>Disabled</label>
                        <input type="text" placeholder="placeholder" disabled={true}/>
                    </Form.Columns>
                    <label>Error</label>
                    <textarea placeholder="placeholder" rows={4} className="error"/>
                    <label>Select</label>
                    <AnimationDropdown/>
                </Form>
                <h2>Form columns <p className="normal">Based on the Columns API</p></h2>
                <Form className="container-4 mb-30">
                    <Form.Columns sizes={[4, 3, 5, null, 6, 3]}>
                        <div className="column">
                            <label>4/12</label>
                            <input type="text" placeholder="4/12"/>
                        </div>
                        <label>3/12</label>
                        <input type="text" placeholder="3/12"/>
                        <label>5/12</label>
                        <input type="text" placeholder="5/12"/>
                        <label>Auto</label>
                        <input type="text" placeholder="auto"/>
                        <label>6/12</label>
                        <input type="text" placeholder="6/12"/>
                        <label>3/12</label>
                        <input type="text" placeholder="3/12"/>
                    </Form.Columns>
                </Form>
                <h2>Bouncing Checkboxes</h2>
                <div className="mb-30">
                    {darkColors.map((color, i) => (
                        <BouncingCheckbox className={color} defaultChecked={true} key={i}/>
                    ))}
                </div>
                <h2>Android Checkboxes</h2>
                <div className="columns">
                    {darkColors.map((color, i) => (
                        <AndroidCheckbox
                            id={`checkbox-${i}`}
                            className={`${color}`}
                            defaultChecked={true} key={i}
                        />
                    ))}
                </div>
            </Page>
        );
    }
}

export default FormsPage;