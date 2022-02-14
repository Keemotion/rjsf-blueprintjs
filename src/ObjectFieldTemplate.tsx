import React from 'react';
import { Divider, Classes } from '@blueprintjs/core';
import { ObjectFieldTemplateProps } from '@rjsf/core';

const ROOT = 'root';

export default function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  const { idSchema, description, properties, title } = props;

  return (
    <div className={`schema-${idSchema.$id}`}>
      {title && (
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
