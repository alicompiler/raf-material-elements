import * as React from "react";
import {Component} from "react";
import {Form} from "@alicompiler/raf-core";
import {Text} from "../Text";
import {Button, Divider, Typography} from "@material-ui/core";

export class TextFieldExample extends Component {

    private simpleText: any = null;
    private withIcon: any = null;
    private withProps: any = null;

    render() {
        return <div>
            <Typography variant={"h4"}>Simple Text Field</Typography>

            <Form ref={ref => this.simpleText = ref} fields={[
                {as: Text, name: 'text'}
            ]}/>

            <Button variant={"contained"} color={"primary"} onClick={() => (window as any).__form = this.simpleText}>
                SETUP FORM AS GLOBAL
            </Button>

            <Divider/>


            <Typography variant={"h4"}>With Icon</Typography>
            <Form ref={ref => this.withIcon = ref} fields={[
                {
                    as: Text, name: 'text', extra: {
                        adornment: <p>X</p>
                    }
                }
            ]}/>
            <Button variant={"contained"} color={"primary"} onClick={() => (window as any).__form = this.withIcon}>SETUP
                FORM AS GLOBAL</Button>
            <Divider/>

            <Typography variant={"h4"}>With Material Props</Typography>
            <Form ref={ref => this.withIcon = ref} fields={[
                {
                    as: Text, name: 'text', extra: {
                        fullWidth: true, color: "primary", variant: "outlined"
                    }
                }
            ]}/>
            <Button variant={"contained"} color={"primary"} onClick={() => (window as any).__form = this.withProps}>SETUP
                FORM AS GLOBAL</Button>

        </div>;
    }

}