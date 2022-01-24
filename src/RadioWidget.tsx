/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import classNames from 'classnames';
import { WidgetProps } from '@rjsf/core';
import { RadioGroup, Radio } from '@blueprintjs/core';
import { UIOptions, UISchemaExtended } from './types';

interface Props extends WidgetProps {
  uiSchema: UISchemaExtended;
}

export default function RadioWidget(props: Props) {
  const { options, onChange, value, disabled, readonly, uiSchema } = props;
  const _onChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => onChange(value);
  const { enumOptions } = options as unknown as UIOptions;
  return (
    <RadioGroup name={props.id} disabled={disabled || readonly} onChange={_onChange} selectedValue={value}>
      {enumOptions.map((it: any, index: number) => {
        const label = (() => {
          if (uiSchema['ui:radio-label'] && uiSchema['ui:radio-label'][index]) {
            return uiSchema['ui:radio-label'][index];
          }

          return it.label;
        })();

        return (
          <Radio key={it.value} name={props.id} label={label} value={it.value}>
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
        );
      })}
    </RadioGroup>
  );
}
