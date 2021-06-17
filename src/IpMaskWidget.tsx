/* eslint-disable no-shadow, react/no-array-index-key, no-param-reassign */
import React, { useCallback } from 'react';
import { Intent, NumericInput } from '@blueprintjs/core';
import { WidgetProps } from '@rjsf/core';

const MIN = 0;
const MAX = 255;

export default function IpMaskWidget({
  onChange,
  onBlur,
  value,
  id,
  required,
  readonly,
  disabled,
  onFocus,
  autofocus,
  placeholder,
  rawErrors,
}: WidgetProps) {
  const valueParts = value.split('.');
  const _onChange = useCallback(
    (index: number) => (valueAsNumber: number, _valueAsString: string) => {
      // console.log(valueAsNumber, valueAsString);

      let correctedValue = valueAsNumber;
      if (valueAsNumber > MAX) {
        correctedValue = MAX;
      }

      if (valueAsNumber < MIN) {
        correctedValue = MIN;
      }

      const newFields = [...valueParts];
      newFields[index] = String(correctedValue);

      const nextValue = newFields.join('.');
      onChange(nextValue);
    },
    [onChange, valueParts]
  );
  const _onBlur = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onBlur(id, value);
  const _onFocus = ({ target: { value } }: React.FocusEvent<HTMLInputElement>) => onFocus(id, value);

  return (
    <div className="ip-address-widget">
      {valueParts.map((val: string, i: number) => (
        <>
          <NumericInput
            required={required}
            readOnly={readonly}
            disabled={disabled}
            autoFocus={autofocus}
            onFocus={_onFocus}
            value={val}
            buttonPosition="none"
            onValueChange={_onChange(i)}
            onBlur={_onBlur}
            min={MIN}
            max={MAX}
            intent={rawErrors && rawErrors.length ? Intent.DANGER : undefined}
            placeholder={placeholder}
          />
          {i !== valueParts.length - 1 ? <i>.</i> : false}
        </>
      ))}
    </div>
  );
}
