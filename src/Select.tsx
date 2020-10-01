import {SelectBase} from "./SelectBase";
import React from "react";
import {MenuItem} from "@material-ui/core";

export class Select extends SelectBase {

    protected renderOption(option: { text: string; value: string } , index : number): any {
        return <MenuItem key={index} value={option.value}>{option.text}</MenuItem>
    }

}