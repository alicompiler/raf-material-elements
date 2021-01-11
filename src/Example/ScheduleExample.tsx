import React, {Component} from 'react';
import {Box} from "@material-ui/core";
import {Form} from "@autofiy/raf-core";
import {Radio} from "../Radio";
import {TextArray} from "../TextArray";
import {KeyValueFormRenderer} from "../Renderers/FormRenderer/KeyValueFormRenderer/KeyValueFormRenderer";
import {NativeDateTime} from "../NativeDateTime";
import {NativeTime} from "../NativeTime";
import {Text} from "../Text";
import {Switch} from "../Checkbox";

class ScheduleExample extends Component {
    render() {
        return (
            <Box>
                <Form fields={[
                    {as: Text, name: 'title', extra: {__label: 'Title'}},
                    {as: NativeDateTime, name: 'executionTime', extra: {__label: 'First Execution Time'}},
                    {
                        as: Radio, name: 'interval', extra: {
                            __label: 'Interval',
                            options: [{text: 'Daily', value: 'day'}, {text: 'Weekly', value: 'week'},
                                {text: 'Monthly', value: 'month'}
                            ]
                        }
                    },
                    {as: NativeTime, name: 'startTime', extra: {__label: 'Interval Start Time' , label : 'Test'}},
                    {as: TextArray, name: 'commands', extra: {__label: 'Commands'}},
                    {as: Switch, name: 'asAdmin', extra: {__label: 'Admin Permission'}},
                ]} services={{
                    formRenderer: form => new KeyValueFormRenderer(form)
                }} extra={{renderOptions: {header: 'Task Scheduling'}}}/>
            </Box>
        );
    }
}

export default ScheduleExample;