import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 20px;
  min-height: 160px;
  border-radius: 10px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`;

export const StyledLabel = styled.label`
  margin-right: 20px;
  font-size: 18px;
  font-weight: 500;
`;

export const StyledError = styled(ErrorMessage)`
  position: absolute;
  top: 55px;
  left: 0;
  color: rgb(246, 63, 63);
  font-size: 14px;
`;

export const StyledInput = styled(Field)`
  width: 200px;
  height: 25px;
  font-size: 16px;
  border-radius: 4px;
  border-color: rgba(41, 97, 176, 0.483);
`;

export const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;
