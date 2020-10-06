import {DefaultFieldRenderer} from "@alicompiler/raf-core";
import {FieldOptions} from "@alicompiler/raf-core/build/Field/FieldProps";
import React from "react";

export class FieldRenderer extends DefaultFieldRenderer {

    protected renderFieldElement(options: FieldOptions, inArray: boolean): React.ReactElement {
        const {as: Component, ...otherOptions} = options;
        const props = {...otherOptions, ...this.getInjectedProps()};
        return <Component {...props} key={options.name}/>;
    }

    protected renderWrapper(fields: any): React.ReactElement {
        return fields;
    }

}