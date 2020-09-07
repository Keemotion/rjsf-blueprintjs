/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { TextArea } from '@blueprintjs/core';

export default function TextareaWidget({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
}: WidgetProps) {
  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);
  return (
    <TextArea
      style={{ width: '100%' }}
      id={id}
      placeholder={placeholder}
      disabled={disabled || readonly}
      required={required}
      autoFocus={autofocus}
      value={value}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
    />
  );
}
