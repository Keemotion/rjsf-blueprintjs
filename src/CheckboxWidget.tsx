/* eslint-disable no-shadow */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { Checkbox, Switch } from '@blueprintjs/core';
import { UIOptions, UISchemaExtended } from './types';

interface Props extends WidgetProps {
  uiSchema: UISchemaExtended;
}

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
  options,
  label,
  uiSchema,
}: Props) {
  const { alignIndicator, isSwitch } = options as unknown as UIOptions;
  const _onChange = ({ target: { checked } }: React.ChangeEvent<HTMLInputElement>) => onChange(checked);
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);
  const Component = isSwitch ? Switch : Checkbox;

  return (
    <Component
      id={id}
      label={uiSchema['ui:switch-label'] || label}
      checked={value}
      required={required}
      disabled={disabled || readonly}
      autoFocus={autofocus}
      onChange={_onChange}
      onBlur={_onBlur}
      onFocus={_onFocus}
      alignIndicator={alignIndicator}
    />
  );
}
