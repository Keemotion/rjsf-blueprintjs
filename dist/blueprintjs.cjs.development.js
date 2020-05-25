'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var core = require('@rjsf/core');
var React = _interopDefault(require('react'));
var core$1 = require('@blueprintjs/core');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ObjectFieldTemplate(props) {
  var idSchema = props.idSchema,
      title = props.title,
      description = props.description,
      properties = props.properties;
  return React.createElement("div", {
    className: "schema-" + idSchema.$id
  }, React.createElement(core$1.H5, null, title), description, properties.map(function (element) {
    return React.createElement("div", {
      key: element.name,
      className: "property-wrapper"
    }, element.content);
  }));
}

function FieldTemplate(props) {
  var children = props.children,
      displayLabel = props.displayLabel,
      rawDescription = props.rawDescription,
      rawHelp = props.rawHelp;
  return React.createElement(core$1.FormGroup, {
    helperText: rawHelp
  }, children, displayLabel && rawDescription && React.createElement("p", {
    className: core$1.Classes.TEXT_SMALL,
    style: {
      opacity: 0.7
    }
  }, rawDescription));
}

function DescriptionField(_ref) {
  var description = _ref.description;

  if (description) {
    return React.createElement("p", {
      className: core$1.Classes.TEXT_MUTED
    }, description);
  }

  return null;
}

/**
 * TODO:
 * TitleField
 */

var Fields = {
  DescriptionField: DescriptionField
};

function CheckboxWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      schema = _ref.schema,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "required", "readonly", "disabled", "label", "value", "onChange", "onBlur", "onFocus", "autofocus", "options", "schema", "placeholder"]);

  var rawErrors = props.rawErrors;
  var helperText = rawErrors && rawErrors.length ? React.createElement("ul", {
    className: core$1.Classes.LIST
  }, rawErrors.map(function (error, i) {
    return React.createElement("li", {
      key: i
    }, error);
  })) : undefined;

  var _onChange = function _onChange(_ref2) {
    var checked = _ref2.target.checked;
    return onChange(checked);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(core$1.FormGroup, {
    intent: rawErrors && rawErrors.length ? 'danger' : undefined,
    helperText: helperText,
    label: label || schema.title,
    labelFor: id,
    labelInfo: required ? '(required)' : undefined
  }, React.createElement(core$1.Checkbox, {
    id: id,
    checked: value,
    required: required,
    disabled: disabled || readonly,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

function TextWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      autofocus = _ref.autofocus,
      options = _ref.options,
      schema = _ref.schema,
      placeholder = _ref.placeholder,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "required", "readonly", "disabled", "label", "value", "onChange", "onBlur", "onFocus", "autofocus", "options", "schema", "placeholder"]);

  var myOptions = options; // I contributed to update this lying type declaration, it's merged on master and will be in their next release

  var rawErrors = props.rawErrors;
  var helperText = rawErrors && rawErrors.length ? React.createElement("ul", {
    className: core$1.Classes.LIST
  }, rawErrors.map(function (error, i) {
    return React.createElement("li", {
      key: i
    }, error);
  })) : undefined;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  var input = function () {
    var inputProps = {
      intent: rawErrors && rawErrors.length ? core$1.Intent.DANGER : undefined,
      id: id,
      placeholder: placeholder,
      disabled: disabled || readonly,
      required: required,
      onChange: _onChange,
      onBlur: _onBlur,
      onFocus: _onFocus,
      autoFocus: autofocus,
      value: value || ''
    };

    switch (schema.type) {
      case 'string':
        return React.createElement(core$1.InputGroup, Object.assign({}, inputProps, {
          type: myOptions.inputType
        }));

      case 'number':
        return React.createElement(core$1.NumericInput, Object.assign({}, inputProps, {
          buttonPosition: myOptions.isUpDown ? undefined : 'none'
        }));

      case 'integer':
        // TODO: take care of the fix on blueprint about NumericInput in controlled mode
        return React.createElement(core$1.NumericInput, Object.assign({
          minorStepSize: null,
          majorStepSize: null,
          onValueChange: function onValueChange(_valueAsNumber, valueAsString) {
            onChange(parseInt(valueAsString));
          },
          buttonPosition: myOptions.isUpDown ? undefined : 'none'
        }, inputProps));

      case 'null':
      default:
        return undefined;
    }
  }();

  return React.createElement(core$1.FormGroup, {
    intent: rawErrors && rawErrors.length ? 'danger' : undefined,
    helperText: helperText,
    label: myOptions.title || label || schema.title,
    labelFor: id,
    labelInfo: required ? '(required)' : undefined
  }, input);
}

function PasswordWidget(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["options"]);

  // eslint-disable-next-line
  options.inputType = 'password';
  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options
  }));
}

function SelectWidget(_ref) {
  var id = _ref.id,
      required = _ref.required,
      readonly = _ref.readonly,
      disabled = _ref.disabled,
      label = _ref.label,
      value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      options = _ref.options,
      schema = _ref.schema,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "required", "readonly", "disabled", "label", "value", "onChange", "onBlur", "onFocus", "autofocus", "options", "schema", "placeholder"]);

  var enumOptions = options.enumOptions;
  var rawErrors = props.rawErrors;
  var helperText = rawErrors && rawErrors.length ? React.createElement("ul", {
    className: core$1.Classes.LIST
  }, rawErrors.map(function (error, i) {
    return React.createElement("li", {
      key: i
    }, error);
  })) : undefined;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(core$1.FormGroup, {
    intent: rawErrors && rawErrors.length ? 'danger' : undefined,
    helperText: helperText,
    label: options.title || label || schema.title,
    labelFor: id,
    labelInfo: required ? '(required)' : undefined
  }, React.createElement(core$1.HTMLSelect, {
    required: required,
    disabled: disabled || readonly,
    value: value,
    id: id,
    options: enumOptions,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

function TextareaWidget(_ref) {
  var id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      autofocus = _ref.autofocus,
      label = _ref.label,
      readonly = _ref.readonly,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      options = _ref.options,
      schema = _ref.schema,
      props = _objectWithoutPropertiesLoose(_ref, ["id", "placeholder", "value", "required", "disabled", "autofocus", "label", "readonly", "onBlur", "onFocus", "onChange", "options", "schema"]);

  var rawErrors = props.rawErrors;
  var helperText = rawErrors && rawErrors.length ? React.createElement("ul", {
    className: core$1.Classes.LIST
  }, rawErrors.map(function (error, i) {
    return React.createElement("li", {
      key: i
    }, error);
  })) : undefined;

  var _onChange = function _onChange(_ref2) {
    var value = _ref2.target.value;
    return onChange(value === '' ? options.emptyValue : value);
  };

  var _onBlur = function _onBlur(_ref3) {
    var value = _ref3.target.value;
    return onBlur(id, value);
  };

  var _onFocus = function _onFocus(_ref4) {
    var value = _ref4.target.value;
    return onFocus(id, value);
  };

  return React.createElement(core$1.FormGroup, {
    intent: rawErrors && rawErrors.length ? 'danger' : undefined,
    helperText: helperText,
    label: options.title || label || schema.title,
    labelFor: id,
    labelInfo: required ? '(required)' : undefined
  }, React.createElement(core$1.TextArea, {
    style: {
      width: '100%'
    },
    id: id,
    placeholder: placeholder,
    disabled: disabled || readonly,
    required: required,
    autoFocus: autofocus,
    value: value,
    onChange: _onChange,
    onBlur: _onBlur,
    onFocus: _onFocus
  }));
}

function UpDownWidget(_ref) {
  var options = _ref.options,
      props = _objectWithoutPropertiesLoose(_ref, ["options"]);

  // eslint-disable-next-line
  options.isUpDown = true;
  return React.createElement(TextWidget, Object.assign({}, props, {
    options: options
  }));
}

/**
 * TODO:
 * CheckboxesWidget
 * RadioWidget
 * RangeWidget
 */

var Widgets = {
  CheckboxWidget: CheckboxWidget,
  PasswordWidget: PasswordWidget,
  SelectWidget: SelectWidget,
  TextareaWidget: TextareaWidget,
  TextWidget: TextWidget,
  UpDownWidget: UpDownWidget
};

var _utils$getDefaultRegi = /*#__PURE__*/core.utils.getDefaultRegistry(),
    fields = _utils$getDefaultRegi.fields,
    widgets = _utils$getDefaultRegi.widgets;

var Theme = {
  fields: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, fields), Fields),
  widgets: /*#__PURE__*/_extends( /*#__PURE__*/_extends({}, widgets), Widgets),
  ObjectFieldTemplate: ObjectFieldTemplate,
  FieldTemplate: FieldTemplate
};

var BPForm = /*#__PURE__*/core.withTheme(Theme);

exports.FieldTemplate = FieldTemplate;
exports.Fields = Fields;
exports.ObjectFieldTemplate = ObjectFieldTemplate;
exports.Theme = Theme;
exports.Widgets = Widgets;
exports.default = BPForm;
//# sourceMappingURL=blueprintjs.cjs.development.js.map
