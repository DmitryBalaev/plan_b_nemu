import '@emotion/react';
import { SerializedStyles } from '@emotion/react';

/// <reference types="@emotion/react/types/css-prop" />
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
    };
  }
}

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: SerializedStyles;
  }
}
