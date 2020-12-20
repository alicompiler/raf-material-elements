import { Text } from "./Text";

export class NativeDateTime extends Text {
    protected getInputType(): string {
        return "datetime-local";
    }
}