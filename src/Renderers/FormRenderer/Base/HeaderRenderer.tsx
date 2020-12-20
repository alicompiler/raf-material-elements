import { Box, Divider, Typography } from "@material-ui/core";
import React from "react";
import { IForm } from "@autofiy/raf-core";
import { HeaderRenderOptions } from "./BaseRenderOptions";


export interface HeaderRenderer {
    render(): any;
}

export class DefaultHeaderRenderer implements HeaderRenderer {

    private readonly options: HeaderRenderOptions;
    private readonly form: IForm;

    constructor(options: HeaderRenderOptions, form: IForm) {
        this.options = options;
        this.form = form;
    }

    render(): any {
        if (this.options.header === undefined) {
            return null;
        }
        return <Box>
            {this.renderHeader(this.options.header)}
            {this.renderDivider()}
        </Box>
    }

    private renderDivider(): any {
        const withDivider = this.options.headerDivider;
        return withDivider && <>
            <Divider />
            <Box my={2} />
        </>;
    }

    private renderHeader(header: string | ((form: IForm) => any)) {
        if (typeof header === "string") {
            const headerProps = this.options.headerProps ?? {};
            return <Typography gutterBottom {...headerProps}>{header}</Typography>
        } else {
            return header(this.form);
        }
    }
}