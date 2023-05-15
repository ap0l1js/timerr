import { ButtonContainer, ButtonVariant } from './styles';

interface ButtonProperties {
  variant?: ButtonVariant;
}

export function Button({ variant = 'primary' }: ButtonProperties) {
  return <ButtonContainer variant={variant}>Enviar</ButtonContainer>;
}
