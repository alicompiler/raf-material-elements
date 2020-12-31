import React from "react";
import {Box, Grid} from "@material-ui/core";
import {defaultSimpleFormRendererOptions, SimpleFormRendererOptions} from "./SimpleFormRendererOptions";
import {MaterialFormRendererBase} from "../Base/MaterialFormRenderer";
import {IForm} from "@autofiy/raf-core";


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

    renderFieldsArea(): any {
        const fields: any[] = this.renderFields();
        const verticalSpacing = this.getRenderOptions().verticalSpacing;
        return fields.map((field, index) => {
            const render = this.renderOneFieldOrFieldArray(field);
            return <Box py={verticalSpacing} key={index}>{render}</Box>
        })
    }

    protected getDefaultRenderOptions(): SimpleFormRendererOptions {
        return {...defaultSimpleFormRendererOptions}
    }

    private renderOneFieldOrFieldArray(field: any): any {
        const horizontalSpacing: any = this.getRenderOptions().horizontalSpacing;
        return Array.isArray(field) ?
            <Grid container spacing={horizontalSpacing}>
                {
                    field.map((component, index) => <Grid xs item key={index}>
                        {component}
                    </Grid>)
                }
            </Grid>
            :
            field;
    }
}