import {IForm} from "@autofiy/raf-core";

export interface HeaderRenderOptions {
    header?: string | ((form: IForm) => any);
    headerDivider: boolean;
    headerProps: any;
}

export interface ActionsRenderOptions {
    actions: ((form: IForm) => any)[];
    actionsWrapperProps: any;
    actionHorizontalSpacing: number;
    actionDivider: boolean;
    actionsAlignments: "start" | "end" | "center";
}
