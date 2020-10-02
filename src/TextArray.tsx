import {DynamicField} from "@alicompiler/raf-core";
import React from "react";
import {Box, Button, TextField} from "@material-ui/core";
import {DynamicFieldConfiguration} from "@alicompiler/raf-core/build/Field/Configuration/DynamicFieldExtra";
import {Localization} from "./Localization";

export interface Extra extends DynamicFieldConfiguration {
    removeButton?: boolean;
    removeButtonText?: string;
    addButtonText?: string;
    addButtonPosition?: "top" | "bottom" | "both";
    addButtonHorizontalPosition?: "start" | "end";
}

export class TextArray extends DynamicField<Extra> {

    render(): any {
        const values = this.value().get();
        return <Box m={2}>
            {this.renderAddButtonAtPosition("top")}
            {values.map(this.renderValue)}
            {this.renderAddButtonAtPosition("bottom")}
        </Box>;
    }

    private renderAddButtonAtPosition(wantedPosition: "top" | "bottom"): any {
        const position = this.extra().config('addButtonPosition') ?? "top";
        const addButtonText = this.extra().config('addButtonText') ?? Localization.add;
        const hPosition = this.extra().config("addButtonHorizontalPosition") ?? "end"
        if (position === wantedPosition || position === "both") {
            return <Box py={2} display={"flex"} justifyContent={`flex-${hPosition}`}>
                <Button variant={"outlined"} color={"primary"}
                        onClick={() => this.addInput('')}>{addButtonText}</Button>
            </Box>
        }
    }

    private renderValue = (value: any, index: number) => {
        const hasRemoveButton = this.extra().config('removeButton') ?? true;
        const removeButtonText = this.extra().config('removeButtonText') ?? Localization.remove;
        return <Box py={1} key={index} display={'flex'}>
            <TextField value={value} fullWidth
                       onChange={e => this.value().getOnChangeHandler().handle({...e, index: index})}/>
            <Box p={2}/>
            {
                hasRemoveButton && <Button color={"secondary"} onClick={() => this.removeInput(index)}
                                           variant={"outlined"}>{removeButtonText}</Button>
            }
        </Box>
    }

}