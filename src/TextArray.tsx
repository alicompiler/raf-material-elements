import {DynamicField} from "@alicompiler/raf-core";
import React from "react";
import {Box, Button, TextField} from "@material-ui/core";
import {DynamicFieldConfiguration} from "@alicompiler/raf-core/build/Field/Configuration/DynamicFieldExtra";

export interface Extra extends DynamicFieldConfiguration {
    removeButton?: boolean;
    removeButtonText?: string;
    addButtonText?: string;
}

export class TextArray extends DynamicField<Extra> {

    render(): any {
        const values = this.value().get();
        const addButtonText = this.extra().config('addButtonText') ?? 'Add';

        return <Box>
            {values.map(this.renderValue)}
            <Button onClick={() => this.addInput('')}>{addButtonText}</Button>
        </Box>;
    }

    private renderValue = (value: any, index: number) => {
        const hasRemoveButton = this.extra().config('removeButton') ?? true;
        const removeButtonText = this.extra().config('removeButtonText') ?? 'Remove';
        return <Box key={index} display={'flex'}>
            <TextField value={value}
                       onChange={e => this.value().getOnChangeHandler().handle({...e, index: index})}/>
            {
                hasRemoveButton && <Button onClick={() => this.removeInput(index)}
                                           variant={"outlined"}>{removeButtonText}</Button>
            }
        </Box>
    }

}