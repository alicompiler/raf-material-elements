import {Text} from "./Text";

export class Password extends Text {
    protected getInputType(): string {
        return "password";
    }
}