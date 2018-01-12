import * as React from "react";
import * as ReactAutoComplete from 'react-autocomplete';
import {DynaFieldWrapper, EColor, EStyle} from "dyna-ui-field-wrapper"
import {DynaPickerContainer, EStyle as EPickerStyle, EColor as EPickerColor} from "dyna-ui-picker-container"

import "./style.less";
import "./color.less";
import {faIcon} from "./utils";

// help: https://github.com/reactjs/react-autocomplete

export {EColor, EStyle}

export interface IDynaAutoCompleteProps<TItem> {
  style?: EStyle;
  color?: EColor;
  name: string;
  label?: TContent;
  required?: TContent;
  isLoading?: boolean;
  placeholder?: string;
  items: TItem[];
  value: string;
  selectOnBlur?: boolean;
  getItemValue: (item: TItem) => string;
  renderItem: (item: TItem, isFocused: boolean) => JSX.Element;
  dropDownFilter?: (item: TItem, enteredText: string) => boolean;
  validationMessage?: TContent;
  footer?: TContent;
  onChange: (name: string, value: IAutoCompleteValue<TItem>) => void;
  onBlur?: () => void;
}

export type TContent = string | JSX.Element;

export interface IAutoCompleteValue<TItem> {
  value: string;
  item: TItem;
}

export class DynaAutoComplete<TItem> extends React.Component<IDynaAutoCompleteProps<TItem>> {
  static defaultProps: IDynaAutoCompleteProps<any> = {
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    name: '',
    label: null,
    isLoading: false,
    placeholder: '',
    items: [],
    value: "",
    selectOnBlur: false,
    getItemValue: (item: any) => "",
    renderItem: (item: any, isFocused: boolean) => null,
    dropDownFilter: (item: any, enteredText: string) => true,
    validationMessage: null,
    footer: null,
    onChange: (name: string, value: IAutoCompleteValue<any>) => undefined,
    onBlur: () => undefined,
  };

  private handleOnBlur(): void {
    this.props.onBlur();
  };

  private handlerOnChange(event: Event, value: string): void {
    const {name, items, onChange, getItemValue} = this.props;
    onChange(name, {
      value,
      item: items.find((item: TItem) => value === getItemValue(item)),
    });
  }

  private handlerOnSelect(value: string, item: TItem): void {
    if (this.props.value === value) return; // exit, nothing is changed
    const {name, onChange} = this.props;
    onChange(name, {
      value,
      item,
    });
  }

  private renderMenu(children: any): JSX.Element {
    if (this.props.items.length === 0) return <div/>;
    return (
      <div className="dyna-autocomplete-menu">
        <DynaPickerContainer
          show
          style={EPickerStyle.ROUNDED}
          color={EPickerColor.WHITE_BLACK}
        >{children}</DynaPickerContainer>
      </div>
    )
  }

  public render(): JSX.Element {
    const {
      style, color,
      label, required, isLoading, placeholder,
      items, value,
      selectOnBlur,
      getItemValue, renderItem, dropDownFilter,
      validationMessage, footer,
    } = this.props;

    return (
      <DynaFieldWrapper
        className="dyna-autocomplete"
        style={style}
        color={color}
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
          selectOnBlur={selectOnBlur}
          getItemValue={getItemValue}
          renderMenu={this.renderMenu.bind(this)}
          renderItem={renderItem}
          shouldItemRender={dropDownFilter}
          inputProps={{
            placeholder: placeholder,
            onBlur: this.handleOnBlur.bind(this),
          }}
          onChange={this.handlerOnChange.bind(this)}
          onSelect={this.handlerOnSelect.bind(this)}
        />
      </DynaFieldWrapper>
    );
  }
}
