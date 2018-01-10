import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import * as React from 'react';
import * as enzyme from 'enzyme';

import {DynaAutoComplete} from '../../src';
import {IAutoCompleteValue} from "../../src/DynaAutoComplete";

describe('Home', () => {
  let wrapper;

  it('has expected content with deep render', () => {
    wrapper = enzyme.shallow(
      (
        <DynaAutoComplete
          name="countries"
          items={[]}
          value="Austria"
          getItemValue={(item: any) => ""}
          renderItem={(item: any, isFocused: boolean) => <span>item.label</span>}
          onChange={(name: string, value: IAutoCompleteValue<any>) => undefined}
        />
      ),
      {}
    );

    expect(wrapper).toMatchSnapshot();
  });
});
