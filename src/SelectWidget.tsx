/* eslint-disable no-shadow */
import React from 'react';
import { HTMLSelect } from '@blueprintjs/core';
import { WidgetProps } from '@rjsf/core';
import { UIOptions } from './types';

export default function SelectWidget({
  id,
  required,
  readonly,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
}: WidgetProps) {
  const { enumOptions } = options as unknown as UIOptions;
  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => onChange(value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLSelectElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLSelectElement>) => onFocus(id, value);
  return (
    <HTMLSelect
      autoFocus={autofocus}
      required={required}
      disabled={disabled || readonly}
      value={value}
      id={id}
      options={enumOptions}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
}
