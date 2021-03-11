export interface FieldConfig {
    label: string;
    name: string;
    inputType: string;
    value?: string;
    validator: Validators[];
    validated: boolean;
    class?: string;
}

export interface ButtonConfig {
    type: string;
    href?: string;
    value: string;
    class: string;
}

export interface Validators {
    min?: number;
    max?: number;
    message: string;
}
