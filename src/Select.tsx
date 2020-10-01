import React from "react";
import {Text} from "./Text";
import {MenuItem} from "@material-ui/core";

export class Select extends Text {

    protected getMainProps(): any {
        const props = super.getMainProps();
        props.select = true;
        return props;
    }

    protected renderChildren(): any {
        const options = this.getOptions();
        return options.map((option, index) =>
            <MenuItem key={index} value={option.value}>{option.text}</MenuItem>
        )
    }

    protected getOptions(): { text: string, value: string }[] {
        return this.getExtraProps().options ?? [];
    }

}