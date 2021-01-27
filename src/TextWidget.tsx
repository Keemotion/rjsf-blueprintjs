/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { InputGroup, NumericInput, Intent } from '@blueprintjs/core';
import { UIOptions } from './types';

export default function TextWidget({
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
  schema,
  placeholder,
  rawErrors,
}: WidgetProps) {
  const { small, inputType, isUpDown, link, leftElement, rightElement } = options as UIOptions;
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
      small,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
      autoFocus: autofocus,
      value: (() => {
        if (typeof value === 'number') {
          return String(value);
        }
        return value || '';
      })(),
    };

    if (link) {
      return (
        <a href={link.href} target={link.target}>
          {inputProps.value}
        </a>
      );
    }

    switch (schema.type) {
      case 'string':
        return <InputGroup {...inputProps} type={inputType} leftElement={leftElement} rightElement={rightElement} />;
      case 'number':
        return (
          <NumericInput
            {...inputProps}
            defaultValue={schema.default ? (schema.default as string) : undefined}
            onValueChange={(_valueAsNumber, valueAsString) => {
              onChange(valueAsString);
            }}
            buttonPosition={isUpDown ? undefined : 'none'}
          />
        );
      case 'integer':
        // TODO: take care of the fix on blueprint about NumericInput in controlled mode
        return (
          <NumericInput
            {...inputProps}
            minorStepSize={null}
            majorStepSize={null}
            onValueChange={(_valueAsNumber, valueAsString) => {
              onChange(valueAsString);
            }}
            defaultValue={schema.default ? (schema.default as string) : undefined}
            buttonPosition={isUpDown ? undefined : 'none'}
            min={schema.minimum}
          />
        );
      case 'null':
      default:
        return null;
    }
  })();

  return input;
}
