import {BaseField} from "./BaseField";
import {Slider as MaterialSlider, Typography} from "@material-ui/core";
import * as React from "react";

export class Slider extends BaseField {


    render(): any {
        let extraProps = this.getExtraProps();
        let otherProps = this.getOtherProps();
        const mainProps = this.getMainProps();

        const Component = this.getComponent();

        return <div>
            {this.renderLabel()}
            <MaterialSlider {...mainProps}
                            {...otherProps}
                            {...extraProps}/>
        </div>
    }

    protected getComponent(): any {
        return null;
    }

    private renderLabel(): any {
        const label = this.extra().config('label');
        if (!label) {
            return null;
        }
        return <Typography gutterBottom>{label}</Typography>;
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