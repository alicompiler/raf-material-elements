import {FieldOptions} from "@alicompiler/raf-core/build/Field/FieldProps";
import {Box, Typography} from "@material-ui/core";
import React from "react";
import {KeyValueRenderOptions} from "./KeyValueRenderOptions";

export interface KeyValueLabelRenderer {
    render(fieldOptions: FieldOptions | FieldOptions[]): any;
}

export class DefaultLabelRenderer implements KeyValueLabelRenderer {

    private readonly options: KeyValueRenderOptions;

    constructor(options: KeyValueRenderOptions) {
        this.options = options;
    }

    render(fieldOptions: FieldOptions | FieldOptions[]): any {
        const alignLabel = this.options.alignLabel === "center" ? "center" : `flex-${this.options.alignLabel}`;
        return <Box alignItems={alignLabel} display={'flex'} alignSelf={"stretch"}
                    width={this.options.labelAreaWidth}>
            <Typography>{this.getLabel(fieldOptions)}</Typography>
        </Box>
    }


    protected getLabel(fieldOptions: FieldOptions | FieldOptions[]): any {
        if (Array.isArray(fieldOptions)) {
            if (fieldOptions[0]) {
                return this.extractLabel(fieldOptions[0])
            }
            return "";
        }
        return this.extractLabel(fieldOptions);
    }

    protected extractLabel(fieldOption: FieldOptions): string {
        const options = this.options;
        let label = fieldOption.extra?.[options.labelPropertyName];
        if (label) {
            return label;
        }
        if (options.alternativeLabelPropertyName && fieldOption.extra?.[options.alternativeLabelPropertyName]) {
            return fieldOption.extra?.[options.alternativeLabelPropertyName];
        }
        return "";
    }

}