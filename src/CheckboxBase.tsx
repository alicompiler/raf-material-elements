import { Field } from "@autofiy/raf-core";
import { FormControlLabel } from "@material-ui/core";
import React from "react";
import { FieldProps } from "@autofiy/raf-core";


export interface Extra {
    checkboxProps?: any;
    labelProps?: any;
    label?: string;
}

export abstract class CheckboxBase extends Field {

    protected constructor(props: FieldProps) {
        super(props);
        this.state.value.extractValueFromEvent = (e: any) => e.target.checked;
        this.state.value.value = false;
    }

    render(): any {
        const checkboxProps = this.extra().config('checkboxProps') ?? {};
        const labelProps = this.extra().config('labelProps') ?? {};
        const label = this.extra().config('label') ?? '';
        const Component = this.getComponent();
        return <FormControlLabel label={label} {...labelProps}
            control={
                <Component checked={this.value().get()}
                    onChange={(e: any) => this.value().getOnChangeHandler().handle(e)}
                    name={this.getName()}
                    {...checkboxProps}
                />
            } />
    }

    protected abstract getComponent(): any;
}