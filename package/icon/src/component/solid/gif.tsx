
import { Icon } from "../../index";

/**
 * A component that renders the `gif` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=solid gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 96C0 60.7 28.7 32 64 32l448 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm296 64c-13.3 0-24 10.7-24 24l0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144c0-13.3-10.7-24-24-24zm56 24l0 80 0 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-40 0 0-32 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0c-13.3 0-24 10.7-24 24zM128 256c0-26.5 21.5-48 48-48c8 0 15.4 1.9 22 5.3c11.8 6.1 26.3 1.5 32.3-10.3s1.5-26.3-10.3-32.3c-13.2-6.8-28.2-10.7-44-10.7c-53 0-96 43-96 96s43 96 96 96c19.6 0 37.5-6.1 52.8-15.8c7-4.4 11.2-12.1 11.2-20.3l0-51.9c0-13.3-10.7-24-24-24l-32 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l8 0 0 13.1c-5.3 1.9-10.6 2.9-16 2.9c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default Gif;