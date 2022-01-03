import React from 'react';
import { Divider, Classes } from '@blueprintjs/core';
import { ObjectFieldTemplateProps } from '@rjsf/core';
import type { JSONSchema7 } from 'json-schema';

const ROOT = 'root';

// TODO: make this global
interface CustomSchema extends JSONSchema7 {
  noTitle: boolean;
}

interface Props extends ObjectFieldTemplateProps {
  schema: CustomSchema;
}

export default function ObjectFieldTemplate(props: Props) {
  const {
    idSchema,
    schema: { title, noTitle },
    description,
    properties,
  } = props;
  return (
    <div className={`schema-${idSchema.$id}`}>
      {title && !noTitle && (
        <>
          <legend className={`${idSchema.$id}-title ${Classes.HEADING}`}>{title}</legend>
          {idSchema.$id === ROOT && <Divider className="root-divider" style={{ marginBottom: 20 }} />}
        </>
      )}
      {description && <p className="description">{description}</p>}
      {properties.map((element) => (
        <div key={element.name} className={`property-wrapper property-${element.name}`}>
          {element.content}
        </div>
      ))}
    </div>
  );
}
