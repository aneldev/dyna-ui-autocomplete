import * as React from "react";
import * as ReactAutoComplete from 'react-autocomplete';
import {DynaFieldWrapper, EColor, EMode, EStyle} from "dyna-ui-field-wrapper"
import {DynaPickerContainer, EStyle as EPickerStyle, EColor as EPickerColor} from "dyna-ui-picker-container"

import "./style.less";
import "./color.less";
import {faIcon} from "./utils";

// help: https://github.com/reactjs/react-autocomplete

export {EColor, EStyle}

export interface IDynaAutoCompleteProps<TItem> {
  name: string;
  style?: EStyle;
  color?: EColor;
  mode?: EMode;
  label?: TContent;
  required?: TContent;
  isLoading?: boolean;
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

export type TContent = string | JSX.Element;

export interface IAutoCompleteValue<TItem> {
  value: string;
  item: TItem;
}

export class DynaAutoComplete<TItem> extends React.Component<IDynaAutoCompleteProps<TItem>> {
  static defaultProps: IDynaAutoCompleteProps<any> = {
    name: '',
    mode: EMode.EDIT,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    label: null,
    isLoading: false,
    items: [],
    value: "",
    inputProps: {},
    selectOnBlur: false,
    getItemValue: (item: any) => "",
    renderItem: (item: any, isFocused: boolean) => null,
    dropDownFilter: (item: any, enteredText: string) => true,
    validationMessage: null,
    footer: null,
    onChange: (name: string, value: IAutoCompleteValue<any>) => undefined,
  };

  private handlerOnChange(event: Event, value: string): void {
    if (this.props.mode === EMode.VIEW) return;
    const {name, items, onChange, getItemValue} = this.props;
    onChange(name, {
      value,
      item: items.find((item: TItem) => value === getItemValue(item)),
    });
  }

  private handlerOnSelect(value: string, item: TItem): void {
    if (this.props.mode === EMode.VIEW) return;
    if (this.props.value === value) return; // exit, nothing is changed
    const {name, onChange} = this.props;
    onChange(name, {
      value,
      item,
    });
  }

  private renderMenu(children: any): JSX.Element {
    let exit: boolean = false;
    if (this.props.mode === EMode.VIEW) exit = true;
    if (this.props.items.length === 0) exit = true;
    if (exit) return <div/>;

    return (
      <div className="dyna-autocomplete-menu">
        <DynaPickerContainer
          show
          style={EPickerStyle.ROUNDED}
          color={EPickerColor.WHITE_BLACK}
          responsive={false}
        >{children}</DynaPickerContainer>
      </div>
    )
  }

  public render(): JSX.Element {
    const {
      mode, style, color,
      label, required, isLoading,
      items, value,
      selectOnBlur,
      inputProps,
      getItemValue, renderItem, dropDownFilter,
      validationMessage, footer,
    } = this.props;

    return (
      <DynaFieldWrapper
        className="dyna-autocomplete"
        style={style}
        color={color}
        mode={mode}
        inputElementSelector="input"
        label={label}
        isLoading={isLoading ? faIcon('circle-o-notch fa-spin fa-3x fa-fw') : null}
        required={required}
        validationMessage={validationMessage}
        footer={footer}
      >
        <ReactAutoComplete
          items={items}
          value={value}
          enabled={mode === EMode.EDIT}
          selectOnBlur={selectOnBlur}
          getItemValue={getItemValue}
          renderMenu={this.renderMenu.bind(this)}
          renderItem={renderItem}
          shouldItemRender={dropDownFilter}
          inputProps={inputProps}
          onChange={this.handlerOnChange.bind(this)}
          onSelect={this.handlerOnSelect.bind(this)}
        />
      </DynaFieldWrapper>
    );
  }
}
