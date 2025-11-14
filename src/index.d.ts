declare module 'mctext-react' {
  import * as React from 'react';
  import { CSSProperties } from 'react';

  export interface Colormap {
    black: string;
    dark_blue: string;
    dark_green: string;
    dark_aqua: string;
    dark_red: string;
    dark_purple: string;
    gold: string;
    gray: string;
    dark_gray: string;
    blue: string;
    green: string;
    aqua: string;
    red: string;
    light_purple: string;
    yellow: string;
    white: string;
  }

  export interface TextComponentObject {
    text?: string;
    color?: keyof Colormap;
    bold?: boolean;
    italic?: boolean;
    underlined?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
    extra?: Array<TextComponentObject | string>;
  }

  export interface McTextProps {
    children: string | TextComponentObject;
    colormap?: Colormap;
    randomChars?: string;
    prefix?: string;
    style?: CSSProperties;
  }

  export default function McText(props: McTextProps): JSX.Element;
  export { McText };
  export const defaultColormap: Colormap;

  export interface ObfuscatedTextProps {
    randomChars: string;
    text: string;
  }

  export class ObfuscatedText extends React.Component<ObfuscatedTextProps> {}

  export interface TextComponentProps {
    colormap: Colormap;
    component: string | TextComponentObject;
    obfuscated?: boolean;
    randomChars: string;
  }

  export function TextComponent(props: TextComponentProps): JSX.Element;

  export function convertTextToJson(text: string, prefix?: string): TextComponentObject;
}
