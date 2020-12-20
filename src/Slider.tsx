import { BaseField } from "./BaseField";
import { Box, Slider as MaterialSlider, Typography } from "@material-ui/core";
import * as React from "react";

export class Slider extends BaseField {


    render(): any {
        let extraProps = this.getExtraProps();
        let otherProps = this.getOtherProps();
        const mainProps = this.getMainProps();

        return <Box display={"flex"} alignItems={"center"}>
            {this.renderLabel()}
            <MaterialSlider {...mainProps}
                {...otherProps}
                {...extraProps} />
        </Box>
    }

    protected getComponent(): any {
        return null;
    }

    private renderLabel(): any {
        const label = this.extra().config('label');
        if (!label) {
            return null;
        }
        return <Box>
            <Typography gutterBottom>{label}</Typography>
            <Box p={2} />
        </Box>;
    }

    protected getMainProps(): any {
        return {
            valueLabelDisplay: "auto",
            min: 0,
            max: 100,
            defaultValue: 0
        }
    }

}