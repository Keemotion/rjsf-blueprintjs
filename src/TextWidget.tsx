/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { InputGroup, Intent, NumericInput } from '@blueprintjs/core';
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
  const { small, inputType, isUpDown, link, leftElement, rightElement, format, numericInputProps } =
    options as unknown as UIOptions;

  const _onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    let nextValue = value;
    if (value === '') {
      nextValue = options.emptyValue as string;
    } else if (format) {
      nextValue = format(value);
    }
    return onChange(nextValue);
  };
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  const input = (() => {
    const inputProps = {
      intent: rawErrors && rawErrors.length ? Intent.DANGER : undefined,
      id,
      placeholder,
      disabled: disabled || readonly,
      required,
      ...(small ? { size: 'small' as const } : {}),
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
      autoFocus: autofocus,
      value: (() => {
        if (!value) {
          return schema.default;
        }
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
      case 'integer':
        return (
          <NumericInput
            {...inputProps}
            defaultValue={schema.default ? (schema.default as string) : undefined}
            onValueChange={(_valueAsNumber, valueAsString) => {
              onChange(valueAsString);
            }}
            buttonPosition={isUpDown ? undefined : 'none'}
            type={isUpDown ? undefined : 'number'}
            stepSize={numericInputProps?.stepSize}
            min={schema.minimum}
            max={schema.maximum}
            minorStepSize={numericInputProps?.minorStepSize}
            majorStepSize={numericInputProps?.majorStepSize}
          />
        );
      case 'null':
      default:
        return null;
    }
  })();

  return input;
}
