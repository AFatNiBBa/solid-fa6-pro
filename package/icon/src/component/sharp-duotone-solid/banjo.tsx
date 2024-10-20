
import { Icon, generic } from "../../index";

/**
 * A component that renders the `banjo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banjo?s=sharp-duotone-solid banjo}
 * @preview ![banjo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/banjo.svg)
 */
const Banjo: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M24.1 313.9c.1-2 .2-4 .3-6c.3-4 .7-8 1.3-11.9c4.1-28.5 15.3-54.6 31.7-76.6c9.6-12.9 21.1-24.3 33.9-33.9c22-16.5 48.2-27.7 76.6-31.7c7.8-1.1 15.9-1.7 24-1.7s16.2 .6 24 1.7c25.7 3.7 49.5 13.1 70 27c17.8 12.1 33.2 27.4 45.3 45.3c13.9 20.5 23.4 44.3 27 70c1.1 7.8 1.7 15.9 1.7 24s-.6 16.2-1.7 24c-4.1 28.5-15.3 54.6-31.7 76.6c-9.6 12.9-21.1 24.3-33.9 33.9c-22 16.5-48.2 27.7-76.6 31.7c-7.8 1.1-15.9 1.7-24 1.7s-16.2-.6-24-1.7c-28.5-4.1-54.6-15.3-76.6-31.7c-12.9-9.6-24.3-21.1-33.9-33.9C41 398.6 29.8 372.5 25.7 344c-1.1-7.8-1.7-15.9-1.7-24c0-2 0-4.1 .1-6.1zM80 320a112 112 0 1 0 224 0A112 112 0 1 0 80 320z" />
        <path d="M376 64l-8.9 35.7L286 180.7c17.8 12.1 33.2 27.4 45.3 45.3l81.1-81.1L448 136l64-72L448 0 376 64zM358.3 296c1.1 7.8 1.7 15.9 1.7 24s-.6 16.2-1.7 24l1.7 0 24 0 0-48-24 0-1.7 0zM326.6 420.6c-9.6 12.9-21.1 24.3-33.9 33.9l1.2 1.2 17 17 33.9-33.9-17-17-1.2-1.2zM216 486.3c-7.8 1.1-15.9 1.7-24 1.7s-16.2-.6-24-1.7l0 1.7 0 24 48 0 0-24 0-1.7zM91.4 454.6c-12.9-9.6-24.3-21.1-33.9-33.9l-1.2 1.2-17 17 33.9 33.9 17-17 1.2-1.2zM25.7 344c-1.1-7.8-1.7-15.9-1.7-24s.6-16.2 1.7-24L24 296 0 296l0 48 24 0 1.7 0zM57.4 219.4c9.6-12.9 21.1-24.3 33.9-33.9l-1.2-1.2-17-17L39.3 201.2l17 17 1.2 1.2zM168 153.7c7.8-1.1 15.9-1.7 24-1.7s16.2 .6 24 1.7l0-1.7 0-24-48 0 0 24 0 1.7zm-12.7 155L144 297.4 121.4 320l11.3 11.3 48 48L192 390.6 214.6 368l-11.3-11.3-48-48z" />
    </Icon>
);

export default Banjo;