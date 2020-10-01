import {Field} from "@alicompiler/raf-core";
import * as React from "react";
import {InputAdornment, TextField} from "@material-ui/core";
import {FieldMessageType} from "@alicompiler/raf-core/build/Field/UI/FieldUIConfiguration";

export interface TextExtra {
    adornment?: any;
    adornmentPosition?: "start" | "end";
}

export class Text<Extra extends TextExtra = TextExtra> extends Field<Extra> {

    render(): any {
        const valid = this.validation().getCurrentValidState();
        const value = this.value().get();
        const disable = this.ui().shouldDisable();
        const message = this.ui().getMessage() ?? undefined;
        const errorMessage = this.ui().getMessageType() === FieldMessageType.ERROR;
        let extraProps = this.getExtraProps();
        let otherProps = this.getOtherProps();

        return <TextField value={value} onChange={e => this.value().getOnChangeHandler().handle(e)}
                          error={!valid} disabled={disable} type={this.getInputType()}
                          helperText={message} FormHelperTextProps={{error: errorMessage}}
                          {...otherProps}
                          {...extraProps}/>;
    }

    protected getOtherProps(): any {
        return {};
    }

    protected getInputType(): string {
        return "text";
    }


    private getExtraProps(): any {
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