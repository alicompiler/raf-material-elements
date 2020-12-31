import { Text } from "./Text";

export class NativeTime extends Text {
    protected getInputType(): string {
        return "time";
    }
}