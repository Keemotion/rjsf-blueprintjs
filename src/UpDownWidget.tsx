import React from 'react';
import { WidgetProps } from '@rjsf/core';
import TextWidget from './TextWidget';

export default function UpDownWidget({ options, ...props }: WidgetProps) {
  // eslint-disable-next-line
  options.isUpDown = true;
  return <TextWidget {...props} options={options} />;
}
