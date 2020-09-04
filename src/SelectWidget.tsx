/* eslint-disable */
import React from 'react';
import { FormGroup, HTMLSelect, Classes } from '@blueprintjs/core';
import { WidgetProps } from '@rjsf/core';
import { UIOptions } from './types';

export default function SelectWidget({
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
  const { enumOptions, inline } = options as UIOptions;
  const helperText =
    rawErrors && rawErrors.length ? (
      <ul className={Classes.LIST}>
        {rawErrors.map((error, i: number) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    ) : undefined;

  const _onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => onChange(value);

  const _onBlur = ({
    target: { value },
  }: React.FocusEvent<HTMLSelectElement>) => onBlur(id, value);

  const _onFocus = ({
    target: { value },
  }: React.FocusEvent<HTMLSelectElement>) => onFocus(id, value);

  return (
    <FormGroup
      intent={rawErrors && rawErrors.length ? 'danger' : undefined}
      helperText={helperText}
      label={options.title || label || schema.title}
      labelFor={id}
      labelInfo={required ? '(required)' : undefined}
      inline={inline}
    >
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
    </FormGroup>
  );
}
