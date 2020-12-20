import { Box, Button } from "@material-ui/core";
import React from "react";
import { IForm } from "@autofiy/raf-core";
import { Localization } from "./Localization";

export interface IMaterialRafDefaults {
    action: {
        actions: ((form: IForm) => any)[];
        actionsWrapperProps: any;
        actionDivider: boolean;
        actionWrapperProps: any;
        actionHorizontalSpacing: number;
        actionsAlignments: "start" | "end" | "center";
    },
    label: {
        labelAreaWidth: number | "auto";
        alignLabel: "center" | "start" | "end";
        labelPropertyName: string;
        alternativeLabelPropertyName?: string;
    },

    header: {
        header?: string | ((form: IForm) => any);
        headerDivider: boolean;
        headerProps: any;
    },

    field: {
        horizontalSpacing: number;
        keyValueSeparator: (field: any) => any,
        fieldSpacing: number;
        fieldDivider: boolean;
    }
}

export const MaterialRafDefaults: IMaterialRafDefaults = {

    action: {
        actions: [
            form => <Button color={"primary"} variant={'contained'}
                onClick={() => form.submit()}>{Localization.submit}</Button>
        ],
        actionsWrapperProps: {},
        actionDivider: true,
        actionWrapperProps: {},
        actionHorizontalSpacing: 2,
        actionsAlignments: "start"
    },

    label: {
        alignLabel: "center",
        alternativeLabelPropertyName: 'label',
        labelPropertyName: '__label',
        labelAreaWidth: 160,
    },

    header: {
        headerProps: { variant: "h5" },
        headerDivider: true,
    },

    field: {
        keyValueSeparator: () => <Box p={2} />,
        fieldDivider: true,
        fieldSpacing: 2,
        horizontalSpacing: 2
    }
};