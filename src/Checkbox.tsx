import {CheckboxBase} from "./CheckboxBase";
import {Checkbox as MaterialCheckbox, Switch as MaterialSwitch} from "@material-ui/core";

export class Checkbox extends CheckboxBase {
    protected getComponent(): any {
        return MaterialCheckbox;
    }
}

export class Switch extends CheckboxBase {

    protected getComponent(): any {
        return MaterialSwitch;
    }
}