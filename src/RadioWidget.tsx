/* eslint-disable no-shadow, react/no-array-index-key */
import React from 'react';
import { WidgetProps } from '@rjsf/core';
import { FormGroup, Classes, RadioGroup, Radio } from '@blueprintjs/core';

export default function RadioWidget(props: WidgetProps) {
  const { options, label, schema, required, rawErrors, onChange, value } = props;

  const helperText =
    rawErrors && rawErrors.length ? (
      <ul className={Classes.LIST}>
        {rawErrors.map((error, i: number) => {
          return <li key={i}>{error}</li>;
        })}
      </ul>
    ) : undefined;

  const _onChange = ({ currentTarget: { value } }: React.FormEvent<HTMLInputElement>) => onChange(value);

  return (
    <FormGroup
      intent={rawErrors && rawErrors.length ? 'danger' : undefined}
      label={options.title || label || schema.title}
      labelInfo={required ? '(required)' : undefined}
      helperText={helperText}
    >
      <RadioGroup onChange={_onChange} selectedValue={value}>
        {(options.enumOptions as any).map((it: any) => (
          <Radio label={it.label} value={it.value} />
        ))}
      </RadioGroup>
    </FormGroup>
  );
}
