import {DefaultHeaderRenderer} from "./HeaderRenderer";
import {DefaultActionsRenderer} from "./ActionsRenderer";
import {Box} from "@material-ui/core";
import React from "react";
import {ActionsRenderOptions, HeaderRenderOptions} from "./BaseRenderOptions";
import {DefaultFormRenderer} from "@autofiy/raf-core";

export interface MaterialFormRenderer<O extends RenderOptions> {
    renderHeaderArea(): any;

    renderFieldsArea(): any;

    renderActionsArea(): any;

    getRenderOptions(): O;

    render(): any;
}

type RenderOptions = HeaderRenderOptions & ActionsRenderOptions;

export abstract class MaterialFormRendererBase<O extends RenderOptions> extends DefaultFormRenderer implements MaterialFormRenderer<O> {


    render(): any {
        return <Box>
            {this.renderHeaderArea()}
            {this.renderFieldsArea()}
            {this.renderActionsArea()}
        </Box>

    }

    getRenderOptions(): O {
        const formRenderOptions = this.getForm().getProps().extra?.renderOptions ?? {};
        return {...this.getDefaultRenderOptions(), ...formRenderOptions};
    }

    protected abstract getDefaultRenderOptions(): O;

    abstract renderFieldsArea(): any;

    renderHeaderArea(): any {
        return new DefaultHeaderRenderer(this.getRenderOptions(), this.getForm()).render();
    }

    renderActionsArea(): any {
        return new DefaultActionsRenderer(this.getRenderOptions(), this.getForm()).render();
    }

}