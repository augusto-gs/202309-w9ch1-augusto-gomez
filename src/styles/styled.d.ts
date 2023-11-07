import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      main: string;
      secondary: string;
      light: string;
    };

    tipography: {
      main: string;
    };
  }
}
