import { Alignment, NumericInputProps } from '@blueprintjs/core';
import { UiSchema } from '@rjsf/core';

export interface UISchemaExtended extends UiSchema {
  'ui:radio-help'?: string[];
  'ui:radio-label'?: string[];
  'ui:switch-label'?: string;
}

// TODO: split it into multiple data structure, containing each the appropriate parameters instead of one struct with all optional
export interface UIOptions {
  /**
   * If you want to use an input tel for example. It's equivalent to the html attribute
   * type on input
   */
  inputType?: string;
  /**
   * Internally use to override the native UpDownWidget from RJSF
   */
  isUpDown?: boolean;
  numericInputProps: NumericInputProps;

  /**
   * A way to define an empty value, kind of default value but for null.
   * Useful when you need a specific type. For example: when it's empty, it's not null
   * it's empty string.
   */
  emptyValue?: string;
  /**
   * Use internally only in case of radio or select. In the JSONSChema7 type, it comes
   * from anyOf property
   */
  enumOptions?: any;
  inline?: boolean;
  /**
   * Use only in TextWidget, so basically, string, number or int type.
   */
  small?: boolean;
  /**
   * use only in case of CheckboxWidget
   */
  alignIndicator?: Alignment;
  /**
   * Use only in case of CustomField usage
   */
  content?: JSX.Element;
  /**
   * Use only in TextWidget, but make sens only in string. Should it be a field in itself?
   */
  link?: {
    href: string;
    target: string;
  };
  /**
   * use only in case of CheckboxWidget
   */
  isSwitch?: boolean;
  /**
   * Use only in TextWidget
   */
  leftElement?: JSX.Element;
  rightElement?: JSX.Element;
  format?: (value: string) => string;
}
