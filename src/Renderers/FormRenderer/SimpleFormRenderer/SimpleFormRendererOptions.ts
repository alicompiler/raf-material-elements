import {MaterialRafDefaults} from "../../../MaterialRafDefaults";
import {ActionsRenderOptions, HeaderRenderOptions} from "../Base/BaseRenderOptions";

export interface SimpleFormRendererOptions extends HeaderRenderOptions, ActionsRenderOptions {
    verticalSpacing: number;
    horizontalSpacing: number;
}

export const defaultSimpleFormRendererOptions: SimpleFormRendererOptions = {

    verticalSpacing: MaterialRafDefaults.field.fieldSpacing,
    horizontalSpacing: MaterialRafDefaults.field.horizontalSpacing,

    actionDivider: MaterialRafDefaults.action.actionDivider,
    actionHorizontalSpacing: MaterialRafDefaults.action.actionHorizontalSpacing,
    actions: MaterialRafDefaults.action.actions,
    actionsAlignments: MaterialRafDefaults.action.actionsAlignments,
    actionsWrapperProps: MaterialRafDefaults.action.actionsWrapperProps,

    header: MaterialRafDefaults.header.header,
    headerDivider: MaterialRafDefaults.header.headerDivider,
    headerProps: MaterialRafDefaults.header.headerProps

}