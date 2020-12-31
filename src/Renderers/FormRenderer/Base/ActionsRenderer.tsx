import {IForm} from "@autofiy/raf-core";
import React from "react";
import {Box, Divider} from "@material-ui/core";
import {ActionsRenderOptions} from "./BaseRenderOptions";

export interface ActionsRenderer {
    render(): any;
}

export class DefaultActionsRenderer implements ActionsRenderer {

    private readonly options: ActionsRenderOptions;
    private readonly form: IForm;

    constructor(options: ActionsRenderOptions, form: IForm) {
        this.options = options;
        this.form = form;
    }

    render(): any {
        const actionWrapperProps = this.options.actionsWrapperProps ?? {};
        const alignItems = this.options.actionsAlignments === "center" ? "center" : `flex-${this.options.actionsAlignments}`;

        return <Box {...actionWrapperProps}>
            {
                this.renderDivider()
            }
            <Box display={'flex'} justifyContent={alignItems}>
                {
                    this.renderActions()
                }
            </Box>
        </Box>
    }

    private renderDivider(): any {
        return this.options.actionDivider && <>
            <Divider/>
            <Box p={2}/>
        </>;
    }

    private renderActions(): any {
        return this.options.actions.map((action, index) => {
            return <Box key={index}>
                {action(this.form)}
                <Box p={this.options.actionHorizontalSpacing}/>
            </Box>
        });
    }
}