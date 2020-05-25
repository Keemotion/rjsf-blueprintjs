import React from 'react';
import { H5 } from '@blueprintjs/core';
import { ObjectFieldTemplateProps } from '@rjsf/core';

export default function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  const { idSchema, title, description, properties } = props;
  return (
    <div className={`schema-${idSchema.$id}`}>
      <H5>{title}</H5>
      {description}
      {properties.map((element) => (
        <div key={element.name} className="property-wrapper">
          {element.content}
        </div>
      ))}
    </div>
  );
}
