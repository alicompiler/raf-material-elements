import {MaterialRafDefaults} from "../../../MaterialRafDefaults";
import {ActionsRenderOptions, HeaderRenderOptions} from "../Base/BaseRenderOptions";


export interface KeyValueRenderOptions extends HeaderRenderOptions, ActionsRenderOptions {
    labelPropertyName: string;
    alternativeLabelPropertyName?: string;
    labelAreaWidth: number | "auto";
    alignLabel: "center" | "start" | "end";

    fieldSpacing: number;
    keyValueSeparator: (field: any) => any;
    fieldDivider: boolean;
}


export const defaultKeyValueRenderOptions: KeyValueRenderOptions = {
    headerProps: MaterialRafDefaults.header.headerProps,
    headerDivider: MaterialRafDefaults.header.headerDivider,

    actionDivider: MaterialRafDefaults.action.actionDivider,
    actionsWrapperProps: MaterialRafDefaults.action.actionWrapperProps,
    actionHorizontalSpacing: MaterialRafDefaults.action.actionHorizontalSpacing,
    actionsAlignments: MaterialRafDefaults.action.actionsAlignments,
    actions: MaterialRafDefaults.action.actions,

    alternativeLabelPropertyName: MaterialRafDefaults.label.alternativeLabelPropertyName,
    labelPropertyName: MaterialRafDefaults.label.labelPropertyName,
    alignLabel: MaterialRafDefaults.label.alignLabel,
    labelAreaWidth: MaterialRafDefaults.label.labelAreaWidth,

    fieldSpacing: MaterialRafDefaults.field.fieldSpacing,
    keyValueSeparator: MaterialRafDefaults.field.keyValueSeparator,
    fieldDivider: MaterialRafDefaults.field.fieldDivider
}