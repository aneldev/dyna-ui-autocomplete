import * as React from "react";
import { EColor, EStyle } from "dyna-ui-field-wrapper";
import "./style.less";
import "./color.less";
export { EColor, EStyle };
export interface IDynaAutoCompleteProps {
    style?: EStyle;
    color?: EColor;
    name: string;
    label?: TContent;
    required?: TContent;
    value: string;
    validationMessage?: TContent;
    footer?: TContent;
    propsForInput?: any;
    onChange?: (name: string, value: string) => void;
}
export declare type TContent = string | JSX.Element;
export declare class DynaAutoComplete extends React.Component<IDynaAutoCompleteProps> {
    static defaultProps: IDynaAutoCompleteProps;
    private handleChange(value);
    render(): JSX.Element;
}
