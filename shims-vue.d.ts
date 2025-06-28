declare module "*.vue" {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "@/assets/icons/*.vue" {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
