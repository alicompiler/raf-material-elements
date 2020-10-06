import {Field} from "@alicompiler/raf-core";
import * as React from "react";
import {FieldMessageType} from "@alicompiler/raf-core/build/Field/UI/FieldUIConfiguration";

export abstract class BaseField<Extra = any> extends Field<Extra> {

    render(): any {
        let extraProps = this.getExtraProps();
        let otherProps = this.getOtherProps();
        const mainProps = this.getMainProps();

        const Component = this.getComponent();

        return <Component {...mainProps}
                          {...otherProps}
                          {...extraProps}>
            {
                this.renderChildren()
            }
        </Component>;
    }

    protected renderChildren(): any {
        return null;
    }

    protected abstract getComponent(): any;

    protected getMainProps(): any {
        const valid = this.validation().getCurrentValidState();
        const value = this.value().get();
        const disable = this.ui().shouldDisable();
        const message = this.ui().getMessage() ?? undefined;
        const isErrorMessage = this.ui().getMessageType() === FieldMessageType.ERROR;

        // noinspection JSUnusedGlobalSymbols
        return {
            value: value,
            onChange: (e: any) => this.value().getOnChangeHandler().handle(e),
            error: !valid,
            disabled: disable,
            helperText: message,
            FormHelperTextProps: {error: isErrorMessage}
        }
    }

    protected getOtherProps(): any {
        return {};
    }

    protected getExtraProps(): any {
        return {...this.state.extra}
    }
}