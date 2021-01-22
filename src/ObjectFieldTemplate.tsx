import React from 'react';
import { Divider, Classes } from '@blueprintjs/core';
import { ObjectFieldTemplateProps } from '@rjsf/core';

const ROOT = 'root';

export default function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  const { idSchema, title, description, properties } = props;
  return (
    <div className={`schema-${idSchema.$id}`}>
      <legend className={`${idSchema.$id}-title ${Classes.HEADING}`}>{title}</legend>
      {idSchema.$id === ROOT && <Divider className="root-divider" style={{ marginBottom: 20 }} />}
      {description && <p>{description}</p>}
      {properties.map((element) => (
        <div key={element.name} className={`property-wrapper property-${element.name}`}>
          {element.content}
        </div>
      ))}
    </div>
  );
}
