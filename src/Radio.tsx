import { Field } from "@autofiy/raf-core";
import { FormControl, FormControlLabel, FormLabel, Radio as MaterialRadio, RadioGroup } from "@material-ui/core";
import React from "react";

interface Option {
    value: any;
    text: string;
    radioProps?: any;
    controlProps?: any;
}

interface Extra {
    groupProps?: any;
    label?: string;
    controlLabelProps?: any;
    options: Option[];
}


export class Radio extends Field<Extra> {
    render(): any {
        const groupProps = this.extra().config('groupProps') ?? {};
        return <FormControl component="fieldset">
            {this.renderLabel()}
            <RadioGroup row name={this.getName()} value={this.value().get()}
                onChange={e => this.value().getOnChangeHandler().handle(e)}
                {...groupProps}>
                {
                    this.getOptions().map(this.renderOption)
                }
            </RadioGroup>
        </FormControl>
    }

    private renderLabel(): any {
        const label = this.extra().config('label');
        if (!label) {
            return null;
        }
        return <FormLabel component="legend">{label}</FormLabel>;
    }

    private renderOption = (option: Option, index: number): any => {
        const generalControlProps = this.extra().config('controlLabelProps');
        const otherProps = { ...generalControlProps, ...(option.controlProps ?? {}) }
        return <FormControlLabel key={index}
            value={option.value}
            control={<MaterialRadio {...(option.radioProps ?? {})} />}
            label={option.text}
            {...otherProps}
        />
    }

    protected getOptions(): Option[] {
        return this.extra().config('options') ?? [];
    }
}