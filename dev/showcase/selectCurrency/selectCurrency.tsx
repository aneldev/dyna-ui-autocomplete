import * as React from "react";

import {IShowcaseView} from "dyna-showcase";
import {DynaAutoComplete, IAutoCompleteValue} from "../../../src";

import "./selectCurrency.less";
import {ESize} from "dyna-ui-field-wrapper";

export const selectCurrencyShowcase: IShowcaseView = {
  slug: 'currency',
  title: 'ComboBox style example',
  description: 'Demonstrate currencies selection',
  center: true,
  component: (() => {

    interface ICurrency {
      id: string;
      name: string;
    }

    const currencies: ICurrency[] = [
      {id: 'eur', name: 'Euro'},
      {id: 'usd', name: 'US Dollar'},
      {id: 'aud', name: 'Australian Dollar'},
      {id: 'gbp', name: 'British Pound'},
    ];

    interface IMyComponentState {
      userText?: string;
      currency?: ICurrency;
    }

    class MyComponent extends React.Component<{}, IMyComponentState> {
      constructor(props: {}) {
        super(props);
        this.state = {
          userText: 'US Dollar',
          currency: {id: 'usd', name: 'US Dollar'},
        };
      }

      private renderItem(item: ICurrency, isFocused: boolean): JSX.Element {
        const className:string= [
          'currency-item',
          isFocused ? 'currency-item--focused' : ''
        ].join(' ').trim();
        return (
          <div
            key={item.id}
            className={className}
          >{item.name}</div>
        );
      }

      private handleBlur(event: Event): void {
        if (this.state.currency) {
          this.setState({userText: this.state.currency.name});
        }
        else {
          this.setState({userText: ''});
        }
      }

      private handleChange(name: string, value: IAutoCompleteValue<ICurrency>): void {
        const newState: IMyComponentState = {userText: value.value};
        if (value.item) {
          newState.currency = value.item;
          console.log('selected currency', value.item);
        }
        this.setState(newState);
      }

      public render(): JSX.Element {
        return (
          <DynaAutoComplete
            name="currency"
            label="Currency"
            items={currencies}
            size={ESize.SMALL}
            selectOnBlur
            inputProps={{
              placeholder: 'select currency',
              onBlur: this.handleBlur.bind(this)
            }}
            value={this.state.userText}
            getItemValue={(item: ICurrency) => item.name}
            dropDownFilter={(item: ICurrency, enteredText: string) => item.name.toLowerCase().indexOf(enteredText.toLowerCase()) > -1}
            renderItem={this.renderItem.bind(this)}
            onChange={this.handleChange.bind(this)}
          />
        );
      }
    }

    return <MyComponent/>

  })(),
};
