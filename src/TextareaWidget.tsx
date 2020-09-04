/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { TextArea, FormGroup, Classes } from '@blueprintjs/core';

export default function TextareaWidget({
  id,
  placeholder,
  value,
  required,
  disabled,
  autofocus,
  label,
  readonly,
  onBlur,
  onFocus,
  onChange,
  options,
  schema,
  rawErrors,
}: WidgetProps) {
  const helperText =
    rawErrors && rawErrors.length ? (
      <ul className={Classes.LIST}>
        {rawErrors.map((error, i: number) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    ) : undefined;

  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChange(value === '' ? options.emptyValue : value);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLTextAreaElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLTextAreaElement>) => onFocus(id, value);

  return (
    <FormGroup
      intent={rawErrors && rawErrors.length ? 'danger' : undefined}
      helperText={helperText}
      label={options.title || label || schema.title}
      labelFor={id}
      labelInfo={required ? '(required)' : undefined}
    >
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
    </FormGroup>
  );
}
