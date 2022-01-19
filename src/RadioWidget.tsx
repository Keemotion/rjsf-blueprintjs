/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import { WidgetProps } from '@rjsf/core';
import { RadioGroup, Radio } from '@blueprintjs/core';
import { UIOptions } from './types';

export default function RadioWidget(props: WidgetProps) {
  const { options, onChange, value, disabled, readonly, uiSchema } = props;
  const _onChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => onChange(value);
  const { enumOptions } = options as unknown as UIOptions;
  return (
    <RadioGroup name={props.id} disabled={disabled || readonly} onChange={_onChange} selectedValue={value}>
      {enumOptions.map((it: any, index: number) => (
        <Radio key={it.value} name={props.id} label={it.label} value={it.value}>
          {uiSchema['ui:radio-help'] && uiSchema['ui:radio-help'][index] && (
            <div
              className={classNames({
                [props.id]: true,
                'radio-help': true,
              })}
            >
              {uiSchema['ui:radio-help'][index]}
            </div>
          )}
        </Radio>
      ))}
    </RadioGroup>
  );
}
