declare module 'aurora-design-system' {
  import { FC, ReactNode, HTMLAttributes, ButtonHTMLAttributes, InputHTMLAttributes } from 'react';

  export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
  }

  export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'outlined' | 'gradient';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    hoverable?: boolean;
    header?: ReactNode;
    footer?: ReactNode;
  }

  export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    subtitle?: string;
    actions?: ReactNode;
  }

  export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    align?: 'left' | 'center' | 'right' | 'between';
  }

  export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'gradient';
    badgeSize?: 'sm' | 'md' | 'lg';
    shape?: 'rounded' | 'pill' | 'square';
    dot?: boolean;
  }

  export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    inputSize?: 'sm' | 'md' | 'lg';
  }

  export const Button: FC<ButtonProps>;
  export const Card: FC<CardProps>;
  export const CardHeader: FC<CardHeaderProps>;
  export const CardFooter: FC<CardFooterProps>;
  export const Badge: FC<BadgeProps>;
  export const Input: FC<InputProps>;
}