import React from "react";
import { Box, Divider } from "@material-ui/core";
import FieldRenderer from "@autofiy/raf-core/build/Protocol/FieldRenderer";
import FormDefault from "@autofiy/raf-core";
import { FieldOptions } from "@autofiy/raf-core/build/Field/FieldProps";
import { DefaultLabelRenderer } from "./KeyValueLabelRenderer";
import { defaultKeyValueRenderOptions, KeyValueRenderOptions } from "./KeyValueRenderOptions";
import { MaterialFormRendererBase } from "../Base/MaterialFormRenderer";

export class KeyValueFormRenderer extends MaterialFormRendererBase<KeyValueRenderOptions> {


    protected getDefaultRenderOptions(): KeyValueRenderOptions {
        return defaultKeyValueRenderOptions;
    }


    renderFieldsArea(): any {
        const fieldsRenderer: FieldRenderer = this.getForm().getServiceProvider().getService("fieldRenderer");
        const fields = fieldsRenderer.render();
        const fieldsOptions = this.getForm().getProps().fields;
        const options = this.getRenderOptions();
        return <Box>
            {
                fieldsOptions.map((fieldOptions, index) => {
                    let withFieldDivider = options.fieldDivider && index + 1 < fields.length;
                    return this.renderField(fields[index], fieldOptions, index, withFieldDivider);
                })
            }
        </Box>
    }

    private renderField = (field: any, fieldOptions: FieldOptions | FieldOptions[], index: number, withFieldDivider: boolean): any => {
        const options = this.getRenderOptions();
        return <React.Fragment key={index}>
            <Box display={'flex'} alignItems={"center"} p={options.fieldSpacing}>
                {
                    this.renderKeyValueLabel(fieldOptions)
                }
                {
                    options.keyValueSeparator(field)
                }
                {
                    <Box flex={1}>{field}</Box>
                }
            </Box>
            {
                withFieldDivider && <Divider />
            }
        </React.Fragment>
    }


    protected renderKeyValueLabel(fieldOptions: FieldOptions | FieldOptions[]): any {
        return new DefaultLabelRenderer(this.getRenderOptions()).render(fieldOptions);
    }

}