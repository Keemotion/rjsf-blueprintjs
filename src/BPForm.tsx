import { withTheme, FormProps } from '@rjsf/core';

import { StatelessComponent, ComponentClass } from 'react';
import Theme from './Theme';

const BPForm: ComponentClass<FormProps<any>> | StatelessComponent<FormProps<any>> = withTheme(Theme);

export default BPForm;
