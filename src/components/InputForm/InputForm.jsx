import { FormErrorMessage, Input, Stack } from '@chakra-ui/react';

const InputForm = ({ fieldData, handleBlur, handleChange }) => {
  return (
    <Stack spacing="3" isInline>
      {fieldData.map(({ type, name, placeholder, label }) => (
        <div key={name}>
          <label>
            {label}
            <Input
              type={type}
              name={name}
              id={name}
              placeholder={placeholder}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </label>
          <FormErrorMessage name={name} component={'div'} />
        </div>
      ))}
    </Stack>
  );
};

export default InputForm;
