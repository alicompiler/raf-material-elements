import * as React from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import {BaseField} from "./BaseField";

export interface TextExtra {
    adornment?: any;
    adornmentPosition?: "start" | "end";
}

export class Text<Extra extends TextExtra = TextExtra> extends BaseField<Extra> {

    protected getComponent(): any {
        return TextField;
    }

    protected getMainProps(): any {
        const props = super.getMainProps();
        props.type = this.getInputType()
        return props;
    }

    protected getInputType(): string {
        return "text";
    }


    protected getExtraProps(): any {
        let {adornment, adornmentPosition, ...extraProps}: any = this.state.extra;
        if (adornment) {
            let adornmentProps = Text.getAdornmentProps(adornmentPosition, adornment);
            let inputProps = extraProps.InputProps ?? {};
            inputProps = {...adornmentProps, ...inputProps};
            extraProps.InputProps = {...inputProps};
        }
        return extraProps;
    }

    private static getAdornmentProps(adornmentPosition: any, adornment: any): any {
        const isEnd = adornmentPosition === "end";
        let adornmentProps: any = {};
        if (isEnd) {
            adornmentProps.endAdornment = Text.getAdornmentComponent(adornment, "end");
        } else {
            adornmentProps.startAdornment = Text.getAdornmentComponent(adornment, "start");
        }
        return adornmentProps;
    }

    private static getAdornmentComponent(adornment: any, position: any) {
        return <InputAdornment position={position}>
            {adornment}
        </InputAdornment>;
    }

}