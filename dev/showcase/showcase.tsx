import * as React from 'react';
import {faIcon, IShowcase} from "dyna-showcase";

import {Logo} from "../logo";
import {selectAirportShowcase} from "./airports/selectAirportShowcase";

require('./showcase.less');

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>DynaAutoComplete</h3>
          <h4>plain react input</h4>
          <p>nothing more</p>
        </div>
      ),
    },
    selectAirportShowcase,
    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-autocomplete">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-autocomplete">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
