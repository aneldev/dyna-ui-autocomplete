import * as React from "react";
import { EColor, EMode, EStyle, ESize } from "dyna-ui-field-wrapper";
import "./style.less";
export { EMode, EColor, EStyle, ESize };
export interface IDynaAutoCompleteProps<TItem> {
    className?: string;
    name: string;
    style?: EStyle;
    color?: EColor;
    size?: ESize;
    mode?: EMode;
    label?: TContent;
    required?: TContent;
    isLoading?: boolean;
    isLoadingIcon?: TContent;
    items: TItem[];
    value: string;
    selectOnBlur?: boolean;
    inputProps?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    getItemValue: (item: TItem) => string;
    renderItem: (item: TItem, isFocused: boolean) => JSX.Element;
    dropDownFilter?: (item: TItem, enteredText: string) => boolean;
    validationMessage?: TContent;
    footer?: TContent;
    onChange: (name: string, value: IAutoCompleteValue<TItem>) => void;
}
export declare type TContent = string | JSX.Element;
export interface IAutoCompleteValue<TItem> {
    value: string;
    item: TItem;
}
export declare class DynaAutoComplete<TItem> extends React.Component<IDynaAutoCompleteProps<TItem>> {
    static defaultProps: IDynaAutoCompleteProps<any>;
    private handlerOnChange;
    private handlerOnSelect;
    private renderMenu;
    render(): JSX.Element;
}
