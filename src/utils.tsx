import * as React from 'react';
import Timer = NodeJS.Timer;

export const faIcon = (awesomeFontIconName:string, className:string='') => <i className={`fa fa-${awesomeFontIconName} ${className}`.trim()} aria-hidden="true" />;

export const debounce = (cbFunction: Function, timeout: number): Function => {

  let setTimerHolder: Timer = null;
  let lastCalled: Date = (0 as any);

  const runIt = () => {
    clearTimeout(setTimerHolder);
    setTimerHolder = null;
    lastCalled = new Date();
  };

  return () => {

    if (setTimerHolder) {
      clearTimeout(setTimerHolder);
    }

    if (Number(new Date()) - Number(lastCalled) > timeout) {
      runIt();
    } else {
      setTimerHolder = setTimeout(runIt, timeout);
    }

  }

};
