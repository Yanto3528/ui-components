import styled, { css } from "styled-components";

export const Form = styled.form``;
export const FormGroup = styled.div`
  margin-bottom: 10px;
  label {
    font-weight: 600;
  }
`;
export const Input = styled.input`
  outline: none;
  border: 1px solid ${({ theme }) => theme.lightgrey};
  border-radius: 5px;
  padding: 10px 20px;
  transition: all 0.3s;
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;
export const Textarea = styled.textarea``;
