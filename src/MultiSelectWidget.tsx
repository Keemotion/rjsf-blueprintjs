import React, { useMemo, useCallback } from 'react';
import { Button, MenuItem } from '@blueprintjs/core';
import { MultiSelect } from '@blueprintjs/select';
import { WidgetProps } from '@rjsf/core';
import { IconNames } from '@blueprintjs/icons';

interface EnumOptionsItem {
  type: string;
  enum: any[];
  title: string;
}

const SchemaMultiSelect = MultiSelect.ofType<EnumOptionsItem>();

let isFirstRender = true;
export default function MultiSelectWidget({
  id,
  required,
  readonly,
  autofocus,
  disabled,
  value,
  onChange,
  schema,
  placeholder,
}: WidgetProps) {
  const selected = (() => {
    const val = (() => {
      // TODO: fix bug about default value not working
      if (isFirstRender) {
        isFirstRender = false;
        return schema.default;
      }
      return value;
    })();
    const newArray = (val as any)
      .split(',')
      .map((item: string) => (schema.items as EnumOptionsItem[]).find((element) => element.enum[0] === item))
      .filter((i: EnumOptionsItem | undefined) => Boolean(i));
    return newArray;
  })();

  const _onChange = useCallback(
    (arr: any[]) => {
      const val = arr.map((item) => item.enum[0]).join(',');
      onChange(val);
    },
    [onChange]
  );

  const clearButton = useMemo(() => {
    return selected.length > 0 ? (
      <Button
        icon={IconNames.CROSS}
        minimal
        onClick={() => {
          _onChange([]);
        }}
      />
    ) : undefined;
  }, [_onChange, selected]);

  return (
    <SchemaMultiSelect
      placeholder={placeholder}
      items={((schema.items as EnumOptionsItem[]) || []).filter((item) => !selected.includes(item))}
      onItemSelect={(item) => {
        const newArray: EnumOptionsItem[] = [...selected];
        newArray.push(item);
        _onChange(newArray);
      }}
      onRemove={(_item, index) => {
        const newArray: EnumOptionsItem[] = [...selected];
        newArray.splice(index, 1);
        _onChange(newArray);
      }}
      selectedItems={selected}
      tagRenderer={(item) => item.title}
      itemRenderer={(item, { handleClick }) => <MenuItem key={item.title} text={item.title} onClick={handleClick} />}
      fill
      tagInputProps={{
        disabled,
        rightElement: clearButton,
        inputProps: { id, required: selected.length === 0 && required, readOnly: readonly, autoFocus: autofocus },
      }}
    />
  );
}
