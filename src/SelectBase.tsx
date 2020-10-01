import {BaseField} from "./BaseField";
import React from "react";
import {FormControl, InputLabel, Select} from "@material-ui/core";

export abstract class SelectBase extends BaseField {
    render(): any {
        const mainProps = this.getMainProps();
        const otherProps = this.getOtherProps();
        const extraProps = this.getExtraProps();
        const options = this.getOptions();
        const formControlProps = this.getFormControlProps();
        return <FormControl {...formControlProps}>
            {this.renderLabel()}
            <Select {...mainProps} {...otherProps} {...extraProps}>
                {
                    options.map((option, index) => this.renderOption(option, index))
                }
            </Select>
        </FormControl>
    }

    protected abstract renderOption(option: { text: string, value: string }, index: number): any ;

    protected renderLabel(): any {
        const label = this.extra().config('label');
        if (!label) return null;
        return <InputLabel>{label}</InputLabel>;
    }

    protected getFormControlProps(): any {
        return this.state.extra.formControlProps ?? {style: {minWidth: 120}};
    }

    protected getMainProps(): any {
        const {helperText, FormHelperTextProps, ...other} = super.getMainProps();
        return other;
    }

    protected getComponent(): any {
        return null;
    }

    protected getOptions(): { text: string, value: string }[] {
        return this.getExtraProps().options ?? [];
    }

    protected getExtraProps(): any {
        const {native, formControlProps, ...otherProps} = super.getExtraProps();
        return otherProps;
    }
}