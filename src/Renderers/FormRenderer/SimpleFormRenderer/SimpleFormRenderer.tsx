import React from "react";
import {Box} from "@material-ui/core";
import {defaultSimpleFormRendererOptions, SimpleFormRendererOptions} from "./SimpleFormRendererOptions";
import {MaterialFormRendererBase} from "../Base/MaterialFormRenderer";
import IForm from "@alicompiler/raf-core/build/Form/IForm";


export class SimpleFormRenderer extends MaterialFormRendererBase<SimpleFormRendererOptions> {

    constructor(form: IForm) {
        super(form);
    }

    render(): any {
        return <Box>
            {this.renderHeaderArea()}
            {this.renderFieldsArea()}
            {this.renderActionsArea()}
        </Box>
    }

    protected getDefaultRenderOptions(): SimpleFormRendererOptions {
        return {...defaultSimpleFormRendererOptions}
    }


    renderFieldsArea(): any {
        const fields: any[] = this.renderFields();
        const verticalSpacing = this.getRenderOptions().verticalSpacing;
        return fields.map((field, index) => {
            const render = this.renderOneFieldOrFieldArray(field);
            return <Box py={verticalSpacing} key={index}>{render}</Box>
        })
    }

    private renderOneFieldOrFieldArray(field: any): any {
        const horizontalSpacing = this.getRenderOptions().horizontalSpacing;
        return Array.isArray(field) ?
            <Box px={horizontalSpacing} display={'flex'}>{field.map(field => <Box
                flex={1}>{field}</Box>)}</Box>
            :
            field;
    }
}