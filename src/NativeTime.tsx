import {Text} from "./Text";

export class NativeTime extends Text {
    protected getInputType(): string {
        return "time";
    }

    protected getOtherProps(): any {
        return {
            ...super.getOtherProps(),
            InputLabelProps: {shrink: true}
        }
    }
}