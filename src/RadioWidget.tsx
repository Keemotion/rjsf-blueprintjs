/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { RadioGroup, Radio } from '@blueprintjs/core';

export default function RadioWidget(props: WidgetProps) {
  const { options, onChange, value } = props;
  const _onChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => onChange(value);
  return (
    <RadioGroup onChange={_onChange} selectedValue={value}>
      {(options.enumOptions as any).map((it: any) => (
        <Radio label={it.label} value={it.value} />
      ))}
    </RadioGroup>
  );
}
