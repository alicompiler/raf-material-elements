import { DefaultServices } from "@autofiy/raf-core";
import { FieldRenderer } from "./Renderers/FieldRenderer";
import { SimpleFormRenderer } from "./Renderers/FormRenderer/SimpleFormRenderer/SimpleFormRenderer";

export function setupRafMaterial(): void {
    DefaultServices.fieldRenderer = (form: any) => new FieldRenderer(form);
    DefaultServices.formRenderer = (form: any) => new SimpleFormRenderer(form);
}