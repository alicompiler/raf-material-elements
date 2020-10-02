import * as React from "react";
import {Component} from "react";
import {Form} from "@alicompiler/raf-core";
import {Text} from "../Text";
import {Button, Divider, Typography} from "@material-ui/core";
import {Password} from "../Password";
import {NativeDate} from "../NativeDate";
import {NativeDateTime} from "../NativeDateTime";
import {NativeTime} from "../NativeTime";
import {TextArea} from "../TextArea";
import {Select} from "../Select";
import {Radio} from "../Radio";
import {Checkbox, Switch} from "../Checkbox";
import {Slider} from "../Slider";
import {AutoUpload} from "../AutoUpload";
import {TextArray} from "../TextArray";

export class TextFieldExample extends Component {

    private simpleText: any = null;
    private withIcon: any = null;
    private withProps: any = null;

    render() {
        return <div>
            <Typography variant={"h4"}>Simple Text Field</Typography>

            <Form ref={ref => this.simpleText = ref} fields={[
                {as: Text, name: 'text'},
                {as: Password, name: "password"},
                {as: NativeDate, name: "date"},
                {as: NativeDateTime, name: "datetime"},
                {as: NativeTime, name: "time"},
                {as: TextArea, name: 'text-area'},
                {
                    as: Select, name: "gender", extra: {
                        options: [{text: "Male", value: 1}, {text: "Female", value: 2}],
                        label: 'Gender', fullWidth: true
                    }
                },
                {
                    as: Radio, name: 'action', extra: {
                        options: [
                            {text: 'Delete', value: 'delete', radioProps: {color: 'secondary'}},
                            {text: 'Archive', value: 'archive'},
                            {text: 'Edit', value: 'edit', radioProps: {color: 'primary'}},
                        ], label: 'SELECT ACTION',
                        groupProps: {
                            row: false
                        }
                    }
                },
                {
                    as: Checkbox, name: 'check', extra: {label: 'Checkbox'},
                },
                {
                    as: Switch, name: 'switch', extra: {label: 'Switch'},
                },
                {
                    as: Slider, name: "volume"
                },
                {
                    as: Slider, name: "volume2", extra: {
                        label: 'VOLUME',
                        marks: [{value: 0, label: 'Low'}, {value: 30, label: 'Mid'}, {value: 70, label: 'High'}]
                    }
                },
                {
                    as: AutoUpload, name: 'image', extra: {
                        label: 'Profile Image', uploadOptions: {
                            url: 'http://httpbin.org/post'
                        }
                    }
                },
                {
                    as: TextArray, name: 'names'
                }
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
                },
                {
                    as: Password, name: 'password', extra: {
                        adornment: <p>*</p>
                    }
                },
                {
                    as: NativeDate, name: 'date', extra: {
                        adornment: <p>D</p>
                    }
                },
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
                },
                {
                    as: Password, name: 'password', extra: {
                        placeholder: 'Enter Your Password', label: 'Password'
                    }
                },
                {
                    as: NativeDate, name: 'date', extra: {}
                }
            ]}/>

            <Button variant={"contained"} color={"primary"} onClick={() => (window as any).__form = this.withProps}>
                SETUP FORM AS GLOBAL
            </Button>

        </div>;
    }

}