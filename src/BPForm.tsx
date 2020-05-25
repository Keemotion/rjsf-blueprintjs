import { withTheme, FormProps } from "@rjsf/core";

import Theme from "./Theme";
import { StatelessComponent, ComponentClass } from "react";

const BPForm:
  | ComponentClass<FormProps<any>>
  | StatelessComponent<FormProps<any>> = withTheme(Theme);

export default BPForm;
