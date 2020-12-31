import { Text } from "./Text";

export class NativeDate extends Text {
    protected getInputType(): string {
        return "date";
    }
}