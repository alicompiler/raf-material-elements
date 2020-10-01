import {SelectBase} from "./SelectBase";
import React from "react";

export class NativeSelect extends SelectBase {
    protected renderOption(option: { text: string; value: string }, index: number): any {
        return <option key={index} value={option.value}>{option.text}</option>
    }
}