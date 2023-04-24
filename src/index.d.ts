import { CSSProperties } from 'react';

type Color = 'currentColor' | string

export interface IconProps {
  color?: Color
  size?: number | string
  varient?: 'light' | 'regular' | 'bold' | 'filled' | 'duotone'
  style?: CSSProperties
  title?: string
  className?: string
}

export const NotificationUnread: React.FC<IconProps>