//ref: https://github.com/chakra-ui/chakra-ui/discussions/2385#discussioncomment-118135

import {
  Button,
  ButtonGroup,
  useRadio,
  useRadioGroup,
  UseRadioProps,
} from "@chakra-ui/react";

function CustomRadio(props: UseRadioProps) {
  const { ...radioProps } = props;
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  return (
    <>
      <Button
        as="label"
        {...getCheckboxProps()}
        bg={state.isChecked ? "green.200" : "transparent"}
      >
        {radioProps.value}
        <input {...input} />
      </Button>
    </>
  );
}
export function CustomRadioGroup<Values extends readonly string[]>({
  values,
  onChangeValue,
  ...props
}: {
  values: Values;
  onChangeValue: (value: Values[number]) => void;
} & React.ComponentProps<typeof ButtonGroup>) {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "",
    onChange: onChangeValue,
  });

  return (
    <ButtonGroup {...getRootProps()} isAttached variant="outline" {...props}>
      {values.map((v) => {
        return <CustomRadio key={v} {...getRadioProps({ value: v })} />;
      })}
    </ButtonGroup>
  );
}
