/* eslint-disable */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { FormGroup, Checkbox, Classes } from '@blueprintjs/core';

export default function CheckboxWidget({
  id,
  required,
  readonly,
  disabled,
  label,
  value,
  onChange,
  onBlur,
  onFocus,
  autofocus,
  options,
  schema,
  rawErrors,
}: WidgetProps) {
  const { inline } = options as UIOptions;

  const helperText =
    rawErrors && rawErrors.length ? (
      <ul className={Classes.LIST}>
        {rawErrors.map((error, i: number) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    ) : undefined;

  const _onChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => onChange(checked);

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);

  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <FormGroup
      intent={rawErrors && rawErrors.length ? 'danger' : undefined}
      helperText={helperText}
      label={label || schema.title}
      labelFor={id}
      inline={inline}
      labelInfo={required ? '(required)' : undefined}
    >
      <Checkbox
        id={id}
        checked={value}
        required={required}
        disabled={disabled || readonly}
        onChange={_onChange}
        onBlur={_onBlur}
        onFocus={_onFocus}
      />
    </FormGroup>
  );
}
