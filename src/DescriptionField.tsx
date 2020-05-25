import React from 'react';
import { FieldProps } from '@rjsf/core';
import { Classes } from '@blueprintjs/core';

export default function DescriptionField({ description }: FieldProps) {
  if (description) {
    return <p className={Classes.TEXT_MUTED}>{description}</p>;
  }
  return null;
}
