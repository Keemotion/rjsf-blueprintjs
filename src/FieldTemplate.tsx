/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { FieldTemplateProps } from '@rjsf/core';
import { Classes, FormGroup } from '@blueprintjs/core';
import { UIOptions } from './types';

export default function FieldTemplate(props: FieldTemplateProps) {
  const { children, displayLabel, rawDescription, rawHelp, uiSchema, rawErrors, label, schema, id, required, hidden } =
    props;

  if (hidden) {
    return children;
  }

  const uiOptions = useMemo(
    () => (uiSchema['ui:options'] ? uiSchema['ui:options'] : {}) as unknown as UIOptions,
    [uiSchema]
  );
  const { inline } = uiOptions;

  const helperText = useMemo(() => {
    if (!rawHelp && !uiSchema['ui:help'] && !rawErrors) {
      return undefined;
    }
    return (
      <>
        {rawHelp || uiSchema['ui:help']}
        {rawErrors && rawErrors.length > 0 && (
          <ul className={Classes.LIST}>
            {rawErrors.map((error, i: number) => {
              return <li key={i}>{error}</li>;
            })}
          </ul>
        )}
      </>
    );
  }, [rawErrors, rawHelp, uiSchema]);

  const uiDescription = useMemo(() => {
    if (displayLabel && rawDescription) {
      return (
        <p
          className={Classes.TEXT_SMALL}
          style={{
            opacity: 0.7,
            marginTop: 5,
          }}
        >
          {rawDescription}
        </p>
      );
    }
    return undefined;
  }, [displayLabel, rawDescription]);

  if (schema.type === 'object' || schema.type === 'array') {
    return (
      <>
        {children}
        {uiDescription}
      </>
    );
  }

  // will most of the time means it's a CustomField
  if (schema.type === 'null') {
    return children;
  }

  return (
    <FormGroup
      label={label || schema.title}
      labelFor={id}
      inline={inline}
      intent={rawErrors && rawErrors.length ? 'danger' : undefined}
      className={props.id}
      helperText={helperText}
      labelInfo={required ? '(required)' : undefined}
    >
      {children}
      {uiDescription}
    </FormGroup>
  );
}
