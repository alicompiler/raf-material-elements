import {Text, TextExtra} from "./Text";

interface TextAreaExtra extends TextExtra {
    rows?: number;
    rowsMax?: number;
}

export class TextArea extends Text<TextAreaExtra> {
    protected getOtherProps(): any {
        return {
            multiline: true,
            variant: 'filled',
            rows: this.extra().config('rows') ?? 5,
            rowsMax: this.extra().config('rowsMax'),
        }
    }
}