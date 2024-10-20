
import { Icon } from "../../index";

/**
 * A component that renders the `cupcake` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cupcake?s=regular cupcake}
 * @preview ![cupcake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cupcake.svg)
 */
const Cupcake: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0c-8.9 0-17 4.9-21.2 12.7s-3.7 17.3 1.2 24.6l10.8 16.3c.7 1.1 1.1 2.4 1.1 3.7c0 3.7-3 6.7-6.7 6.7L152 64c-39.8 0-72 32.2-72 72l0 .8C34.9 142.7 0 181.3 0 228c0 50.8 41.2 92 92 92l264 0c50.8 0 92-41.2 92-92c0-46.8-35-85.5-80.2-91.3c.2-2 .2-4 .2-6.1C368 58.5 309.5 0 237.3 0L224 0zm40 57.3c0-1.7-.1-3.3-.2-5c32.7 11 56.2 41.9 56.2 78.3c0 6-1.8 11.5-4.8 16.1c-4.9 7.4-5.3 16.8-1.1 24.6s12.3 12.6 21.1 12.6l20.8 0c24.3 0 44 19.7 44 44s-19.7 44-44 44L92 272c-24.3 0-44-19.7-44-44s19.7-44 44-44l18.4 0c8.6 0 16.5-4.6 20.8-12s4.3-16.6 0-24c-2-3.5-3.2-7.6-3.2-12c0-13.3 10.7-24 24-24l57.3 0c30.2 0 54.7-24.5 54.7-54.7zM89.3 471.9C93.2 495 113.2 512 136.7 512l11.2 0-20-160-58.5 0 20 119.9zM180.1 512l87.8 0 20-160-127.8 0 20 160zm120 0l11.2 0c23.5 0 43.5-17 47.3-40.1l20-119.9-58.5 0-20 160z" />
    </Icon>
);

export default Cupcake;