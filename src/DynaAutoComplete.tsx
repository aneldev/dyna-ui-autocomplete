import * as React from "react";
// @ts-ignore
import * as ReactAutoComplete from 'react-autocomplete';
import {guid} from "dyna-guid";
import {DynaFieldWrapper, EColor, EMode, EStyle, ESize} from "dyna-ui-field-wrapper"
import {DynaPickerContainer, EStyle as EPickerStyle, EColor as EPickerColor} from "dyna-ui-picker-container"
import {faIcon} from "./utils";

import "./style.less";

// help: https://github.com/reactjs/react-autocomplete

export {EMode, EColor, EStyle, ESize}

export interface IDynaAutoCompleteProps<TItem> {
  className?: string;
  id?: string;              // default: guid
  applyLabelId?: boolean;   // default: true
  applyInputId?: boolean;   // default: true
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

export type TContent = string | JSX.Element;

export interface IAutoCompleteValue<TItem> {
  value: string;
  item: TItem;
}

export class DynaAutoComplete<TItem> extends React.Component<IDynaAutoCompleteProps<TItem>> {
  static defaultProps: IDynaAutoCompleteProps<any> = {
    className: '',
    id: null,
    applyLabelId: true,
    applyInputId: true,
    name: '',
    mode: EMode.EDIT,
    style: EStyle.INLINE_ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    label: null,
    isLoading: false,
    isLoadingIcon: faIcon('circle-o-notch fa-spin'),
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
  private internalHtmlId: string;

  constructor(props: IDynaAutoCompleteProps<TItem>) {
    super(props);
    this.internalHtmlId = props.id || `dyna-autocomplete--${guid()}`;
    if (props.inputProps && props.inputProps.id) {
      console.error('DynaAutoComplete, You passed `inputProps.id` but this will be overridden by the props.id or it\'s default value a guid.');
    }
  }

  private handlerOnChange = (event: any, value: string): void => {
    if (this.props.mode === EMode.VIEW) return;
    const {name, items, onChange, getItemValue} = this.props;
    onChange(name, {
      value,
      item: items.find((item: TItem) => value === getItemValue(item)),
    });
  };

  private handlerOnSelect = (value: string, item: TItem): void => {
    if (this.props.mode === EMode.VIEW) return;
    if (this.props.value === value) return; // exit, nothing is changed
    const {name, onChange} = this.props;
    onChange(name, {
      value,
      item,
    });
  };

  private renderMenu = (children: any): JSX.Element => {
    if (this.props.mode === EMode.VIEW) return <div/>;
    if (!children || !children.length) return <div/>;

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
  };

  public render(): JSX.Element {
    const {
      className,
      applyLabelId, applyInputId,
      mode, style, color, size,
      label, required, isLoading, isLoadingIcon,
      items, value,
      selectOnBlur,
      inputProps,
      getItemValue, renderItem, dropDownFilter,
      validationMessage, footer,
    } = this.props;

    return (
      <DynaFieldWrapper
        className={`dyna-autocomplete ${className}`.trim()}
        id={this.internalHtmlId}
        applyLabelId={applyLabelId}
        applyInputId={false}
        style={style}
        color={color}
        size={size}
        mode={mode}
        inputElementSelector="input"
        label={label}
        isLoading={isLoading ? isLoadingIcon : null}
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
          renderMenu={this.renderMenu}
          renderItem={renderItem}
          shouldItemRender={dropDownFilter}
          inputProps={{
            ...(inputProps || {}),
            id: applyInputId && this.internalHtmlId || undefined,
          }}
          onChange={this.handlerOnChange}
          onSelect={this.handlerOnSelect}
        />
      </DynaFieldWrapper>
    );
  }
}
