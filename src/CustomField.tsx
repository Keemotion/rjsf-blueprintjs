import { FieldProps } from '@rjsf/core';
import { UIOptions } from './types';

export default function CustomField({ uiSchema }: FieldProps) {
  const myOptions = uiSchema['ui:options'] as unknown as UIOptions;
  return myOptions.content!;
}
