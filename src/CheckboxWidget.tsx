/* eslint-disable no-shadow */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { Checkbox } from '@blueprintjs/core';

export default function CheckboxWidget({
  id,
  required,
  readonly,
  disabled,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
}: WidgetProps) {
  const _onChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
  return (
    <Checkbox
      id={id}
      checked={value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
}
