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
export const Cloud: React.FC<IconProps>;
export const CloudBolt: React.FC<IconProps>;
export const CloudBoltMinimalistic: React.FC<IconProps>;
export const CloudCheck: React.FC<IconProps>;
export const CloudDownload: React.FC<IconProps>;
export const CloudMinus: React.FC<IconProps>;
export const CloudPlus: React.FC<IconProps>;
export const CloudRain: React.FC<IconProps>;
export const Clouds: React.FC<IconProps>;
export const CloudSnowfall: React.FC<IconProps>;
export const CloudSnowfallMinimalistic: React.FC<IconProps>;
export const CloudStorm: React.FC<IconProps>;
export const CloudSun: React.FC<IconProps>;
export const CloudSun2: React.FC<IconProps>;
export const CloudUpload: React.FC<IconProps>;
export const CloudWaterdrop: React.FC<IconProps>;
export const CloudWaterdrops: React.FC<IconProps>;
export const CloudyMoon: React.FC<IconProps>;
export const CloundCross: React.FC<IconProps>;
export const MoonSleep: React.FC<IconProps>;
export const MoonStars: React.FC<IconProps>;
export const Snowflake: React.FC<IconProps>;
export const Stars: React.FC<IconProps>;
export const Sun2: React.FC<IconProps>;
export const SunFog: React.FC<IconProps>;
export const Sunrise: React.FC<IconProps>;
export const Sunset: React.FC<IconProps>;
export const Temperature: React.FC<IconProps>;
export const Tornado: React.FC<IconProps>;
export const TornadoSmall: React.FC<IconProps>;
export const Waterdrops: React.FC<IconProps>;
export const Wind: React.FC<IconProps>;
