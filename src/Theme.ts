import { ThemeProps, utils } from '@rjsf/core';
import ObjectFieldTemplate from './ObjectFieldTemplate';
import FieldTemplate from './FieldTemplate';
import Fields from './Fields';
import Widgets from './Widgets';

const { fields, widgets } = utils.getDefaultRegistry();

const Theme: ThemeProps = {
  fields: { ...fields, ...Fields },
  widgets: {
    ...widgets,
    ...Widgets,
  },
  ObjectFieldTemplate: ObjectFieldTemplate as any,
  FieldTemplate,
};

export default Theme;
