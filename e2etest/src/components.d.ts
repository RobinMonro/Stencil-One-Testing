/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  UpdatedValue,
} from './components/date-resources';

export namespace Components {
  interface AppRoot {}
  interface DateTimeInput {
    'max'?: number;
    'min'?: number;
    'name': string;
    'value'?: string;
  }
  interface TestDate {
    'name': string;
    'value'?: string;
  }
}

declare global {


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLDateTimeInputElement extends Components.DateTimeInput, HTMLStencilElement {}
  var HTMLDateTimeInputElement: {
    prototype: HTMLDateTimeInputElement;
    new (): HTMLDateTimeInputElement;
  };

  interface HTMLTestDateElement extends Components.TestDate, HTMLStencilElement {}
  var HTMLTestDateElement: {
    prototype: HTMLTestDateElement;
    new (): HTMLTestDateElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'date-time-input': HTMLDateTimeInputElement;
    'test-date': HTMLTestDateElement;
  }
}

declare namespace LocalJSX {
  interface AppRoot {}
  interface DateTimeInput {
    'max'?: number;
    'min'?: number;
    'name'?: string;
    'onUpdateValue'?: (event: CustomEvent<UpdatedValue>) => void;
    'value'?: string;
  }
  interface TestDate {
    'name'?: string;
    'onUpdateDate'?: (event: CustomEvent<UpdatedValue>) => void;
    'value'?: string;
  }

  interface IntrinsicElements {
    'app-root': AppRoot;
    'date-time-input': DateTimeInput;
    'test-date': TestDate;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'date-time-input': LocalJSX.DateTimeInput & JSXBase.HTMLAttributes<HTMLDateTimeInputElement>;
      'test-date': LocalJSX.TestDate & JSXBase.HTMLAttributes<HTMLTestDateElement>;
    }
  }
}


