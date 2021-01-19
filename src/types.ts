import React from 'react';
import { Alignment } from '@blueprintjs/core';

// TODO: split it into multiple data structure, containing each the appropriate parameters instead of one struct with all optional
export interface UIOptions {
  inputType?: string;
  isUpDown?: boolean;
  emptyValue?: string;
  title?: string;
  enumOptions?: any;
  enumDisabled?: boolean;
  inline?: boolean;
  leftIcon?: any;
  small?: boolean;
  alignIndicator?: Alignment;
  /**
   * Use only in case of CustomField usage
   */
  content?: React.ReactNode;
}
