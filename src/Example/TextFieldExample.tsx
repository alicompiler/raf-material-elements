import * as React from "react";
import {Component} from "react";
import {Form} from "@alicompiler/raf-core";
import {Text} from "../Text";
import {Button} from "@material-ui/core";
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
import {setupRafMaterial} from "../setup";

setupRafMaterial();

export class TextFieldExample extends Component {

    private simpleText: any = null;
    private withIcon: any = null;
    private withProps: any = null;

    render() {
        return <div>
            <Form ref={ref => this.simpleText = ref}
                  extra={{
                      renderOptions: {
                          labelAreaMaxWidth: 200,
                          alignLabel: 'end',
                          header: 'Raf Material Example',
                          actionsAlignments: 'center'
                      }
                  }}
                  fields={[
                      {as: Text, name: 'text'},
                      {as: Password, name: "password"},
                      {as: NativeDate, name: "date"},
                      {as: NativeDateTime, name: "datetime"},
                      {as: NativeTime, name: "time"},
                      {as: TextArea, name: 'text-area'},
                      {
                          as: Select, name: "gender", extra: {
                              options: [{text: "Male", value: 1}, {text: "Female", value: 2}],
                              __label: 'Gender', fullWidth: true
                          }
                      },
                      {
                          as: Radio, name: 'action', extra: {
                              options: [
                                  {text: 'Delete', value: 'delete', radioProps: {color: 'secondary'}},
                                  {text: 'Archive', value: 'archive'},
                                  {text: 'Edit', value: 'edit', radioProps: {color: 'primary'}},
                              ], __label: 'SELECT ACTION',
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
                              __label: 'VOLUME',
                              marks: [{value: 0, label: 'Low'}, {value: 30, label: 'Mid'}, {value: 70, label: 'High'}]
                          }
                      },
                      {
                          as: AutoUpload, name: 'image', extra: {
                              __label: 'Profile Image', uploadOptions: {
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

        </div>;
    }

}