import { CSSProperties } from 'react';

type Color = 'currentColor' | string;

export interface IconProps {
  color?: Color;
  size?: number | string;
  variant?: 'light' | 'regular' | 'bold' | 'filled';
  style?: CSSProperties;
  title?: string;
  className?: string;
}

// types for notifications icons
export const NotificationUnread: React.FC<IconProps>;
export const NotificationUnreadLines: React.FC<IconProps>;
export const NotificationRemove: React.FC<IconProps>;
export const NotificationLinesRemove: React.FC<IconProps>;
export const Bell: React.FC<IconProps>;
export const BellBing: React.FC<IconProps>;
export const BellOff: React.FC<IconProps>;

// types for documents icons
export const Archive: React.FC<IconProps>;
export const ArchiveCheck: React.FC<IconProps>;
export const ArchiveDown: React.FC<IconProps>;
export const ArchiveDownMinimlistic: React.FC<IconProps>;
export const ArchiveMinimalistic: React.FC<IconProps>;
export const ArchiveUp: React.FC<IconProps>;
export const ArchiveUpMinimlistic: React.FC<IconProps>;
export const Clipboard: React.FC<IconProps>;
export const ClipboardAdd: React.FC<IconProps>;
export const ClipboardCheck: React.FC<IconProps>;
export const ClipboardHeart: React.FC<IconProps>;
export const ClipboardList: React.FC<IconProps>;
export const ClipboardRemove: React.FC<IconProps>;
export const ClipboardText: React.FC<IconProps>;
export const Document: React.FC<IconProps>;
export const DocumentAdd: React.FC<IconProps>;
export const DocumentMedicine: React.FC<IconProps>;
export const Documents: React.FC<IconProps>;
export const DocumentsMinimalistic: React.FC<IconProps>;
export const DocumentText: React.FC<IconProps>;
export const Notebook: React.FC<IconProps>;
export const Notes: React.FC<IconProps>;
export const NotesMinimalistic: React.FC<IconProps>;

// types for weather icons
export const Sun: React.FC<IconProps>;
export const Moon: React.FC<IconProps>;