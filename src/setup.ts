import FormDefault from "@alicompiler/raf-core/build/Form/FormDefault";
import {FieldRenderer} from "./Renderers/FieldRenderer";
import {SimpleFormRenderer} from "./Renderers/FormRenderer/SimpleFormRenderer/SimpleFormRenderer";

export function setupRafMaterial(): void {
    FormDefault.setFieldRenderer(form => new FieldRenderer(form));
    FormDefault.setFormRenderer(form => new SimpleFormRenderer(form));
}