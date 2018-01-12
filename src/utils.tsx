import * as React from 'react';
import Timer = NodeJS.Timer;

export const faIcon = (awesomeFontIconName:string, className:string='') => <i className={`fa fa-${awesomeFontIconName} ${className}`.trim()} aria-hidden="true" />;

export const debounce = (cbFunction: Function, timeout: number): Function => {

  let setTimerHolder: Timer = null;
  let lastCalled: Date = (0 as any);

  const runIt = (args: any[]) => {
    clearTimeout(setTimerHolder);
    setTimerHolder = null;
    lastCalled = new Date();
    cbFunction(...args);
  };

  return (...args: any[]) => {
    if (setTimerHolder) {
      clearTimeout(setTimerHolder);
    }
    if (Number(new Date()) - Number(lastCalled) > timeout) {
      runIt(args);
    } else {
      setTimerHolder = setTimeout(() => runIt(args), timeout);
    }
  }

};
