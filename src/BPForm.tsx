import { withTheme, FormProps } from '@rjsf/core';

import { ComponentClass, ComponentPropsWithRef, FunctionComponent } from 'react';
import Theme from './Theme';

type Props = FormProps<any> & ComponentPropsWithRef<ComponentClass | FunctionComponent>;

const BPForm: ComponentClass<Props> | FunctionComponent<Props> = withTheme(Theme);

export default BPForm;
