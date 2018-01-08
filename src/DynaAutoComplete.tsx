import * as React from "react";
import * as ReactAutoComplete from 'react-autocomplete';
import {DynaFieldWrapper, EColor, EStyle} from "dyna-ui-field-wrapper"

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
  items: TItem[];
  value: string;
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
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    name: '',
    label: null,
    isLoading: false,
    items: [],
    value: "",
    getItemValue: (item: any) => "",
    renderItem: (item: any, isFocused: boolean) => null,
    dropDownFilter: (item: any, enteredText: string) => false,
    validationMessage: null,
    footer: null,
    onChange: (name: string, value: IAutoCompleteValue<any>) => undefined,
  };

  private handerOnChange(event: Event, value: string): void {
    const {name, items, onChange, getItemValue} = this.props;
    onChange(name, {
      value,
      item: items.find((item: TItem) => value === getItemValue(item)),
    });
  }

  private handerOnSelect(value: string, item: TItem): void {
    const {name, onChange} = this.props;
    onChange(name, {
      value,
      item,
    });
  }


  private renderMenu(children: any): JSX.Element {
    return (
      <div className="dyna-autocomplete-menu">
        {children}
      </div>
    )
  }

  public render(): JSX.Element {
    const {
      style, color,
      label, required, isLoading,
      items, value,
      getItemValue, renderItem, dropDownFilter,
      validationMessage, footer,
    } = this.props;

    return (
      <DynaFieldWrapper
        className="dyna-autocomplete"
        style={style}
        color={color}
        inputElementSelector=".dyna-ui-input-control-element" // todo
        label={label}
        isLoading={isLoading ? faIcon('circle-o-notch fa-spin fa-3x fa-fw') : null}
        required={required}
        validationMessage={validationMessage}
        footer={footer}
      >
        <ReactAutoComplete
          items={items}
          value={value}
          getItemValue={getItemValue}
          renderMenu={this.renderMenu.bind(this)}
          renderItem={renderItem}
          shouldItemRender={dropDownFilter}
    onChange={this.handerOnChange.bind(this)}
    onSelect={this.handerOnSelect.bind(this)}
    />
  </DynaFieldWrapper>
  );
  }
}
