import styled from "styled-components";

export const CreateTaskContainer = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  min-height: 54px;
`

export const NewTaskInput = styled.input`
  width: 100%;
  height: 54px;

  border: 1px solid ${props => props.theme["colors"]["base-colors"]["gray-700"]};
  border-radius: 8px;
  outline: none;

  font-size: 1rem;
  text-indent: 16px;
  color: ${props => props.theme["colors"]["base-colors"]["gray-100"]};

  &::placeholder{
    color: ${props => props.theme["colors"]["base-colors"]["gray-300"]};
  }

  background-color: ${props => props.theme["colors"]["base-colors"]["gray-500"]};

  transition: 0.2s;

  &:focus, &:hover{
    outline: none;
    border-top: 1px solid ${props => props.theme["colors"]["brand-colors"]["purple"]};
    border-right: 1px solid ${props => props.theme["colors"]["brand-colors"]["purple"]};
    border-bottom: 1px solid ${props => props.theme["colors"]["brand-colors"]["blue"]};
    border-left: 1px solid ${props => props.theme["colors"]["brand-colors"]["blue"]};
  }
`

export const CreateNewTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 90px;
  height: 52px;

  padding: 16px;

  font-size: 0.875rem;
  font-weight: 700;
  color: ${props => props.theme["colors"]["base-colors"]["gray-100"]};

  border: 1px solid transparent;
  border-radius: 8px;

  background-color: ${props => props.theme["colors"]["brand-colors"]["blue-dark"]};

  transition: 0.2s;

  &:hover, &:focus{
    &:not(:disabled){
      background-color: ${props => props.theme["colors"]["brand-colors"]["blue"]};
    }
  }

  &:disabled{
    opacity: 0.8;
    cursor: not-allowed;
  }
`