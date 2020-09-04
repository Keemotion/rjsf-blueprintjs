import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { FormGroup, InputGroup, Classes, NumericInput, Intent } from '@blueprintjs/core';
import { UIOptions } from './types';

export default function TextWidget({
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
  placeholder,
  rawErrors,
}: WidgetProps) {
  const myOptions = options as UIOptions;
  const helperText =
    rawErrors && rawErrors.length ? (
      <ul className={Classes.LIST}>
        {rawErrors.map((error, i: number) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    ) : undefined;

  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) =>
    onChange(value === '' ? options.emptyValue : value);

  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);

  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const input = (() => {
    const inputProps = {
      intent: rawErrors && rawErrors.length ? Intent.DANGER : undefined,
      id,
      placeholder,
      disabled: disabled || readonly,
      required,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
      autoFocus: autofocus,
      value: value || '',
    };

    switch (schema.type) {
      case 'string':
        return <InputGroup {...inputProps} type={myOptions.inputType} />;
      case 'number':
        return <NumericInput {...inputProps} buttonPosition={myOptions.isUpDown ? undefined : 'none'} />;
      case 'integer':
        // TODO: take care of the fix on blueprint about NumericInput in controlled mode
        return (
          <NumericInput
            minorStepSize={null}
            majorStepSize={null}
            onValueChange={(_valueAsNumber, valueAsString) => {
              onChange(parseInt(valueAsString));
            }}
            buttonPosition={myOptions.isUpDown ? undefined : 'none'}
            {...inputProps}
          />
        );
      case 'null':
      default:
        return undefined;
    }
  })();

  return (
    <FormGroup
      intent={rawErrors && rawErrors.length ? 'danger' : undefined}
      helperText={helperText}
      label={myOptions.title || label || schema.title}
      inline={myOptions.inline}
      labelFor={id}
      labelInfo={required ? '(required)' : undefined}
    >
      {input}
    </FormGroup>
  );
}
