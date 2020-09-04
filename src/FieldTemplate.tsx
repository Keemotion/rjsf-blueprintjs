import React from 'react';
import { FieldTemplateProps } from '@rjsf/core';
import { Classes, FormGroup } from '@blueprintjs/core';

export default function FieldTemplate(props: FieldTemplateProps) {
  const { children, displayLabel, rawDescription, rawHelp, uiSchema } = props;
  return (
    <FormGroup className={props.id} helperText={rawHelp || uiSchema['ui:help']}>
      {children}
      {displayLabel && rawDescription && (
        <p
          className={Classes.TEXT_SMALL}
          style={{
            opacity: 0.7,
          }}
        >
          {rawDescription}
        </p>
      )}
    </FormGroup>
  );
}
