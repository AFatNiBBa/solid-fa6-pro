
import { Icon } from "../../index";

/**
 * A component that renders the `gif` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=sharp-solid gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 32l576 0 0 448L0 480 0 32zM320 160l-48 0 0 24 0 144 0 24 48 0 0-24 0-144 0-24zm32 0l0 24 0 80 0 64 0 24 48 0 0-24 0-40 40 0 24 0 0-48-24 0-40 0 0-32 64 0 24 0 0-48-24 0-88 0-24 0zM128 256c0-26.5 21.5-48 48-48c12.3 0 23.5 4.6 32 12.2l32-35.8c-17-15.2-39.4-24.5-64-24.5c-53 0-96 43-96 96s43 96 96 96c19.6 0 37.5-6.1 52.8-15.8l11.2-7.1 0-13.2 0-35.9 0-24-48 0 0 24 0 21.1c-5.3 1.9-10.6 2.9-16 2.9c-26.5 0-48-21.5-48-48z" />
    </Icon>
);

export default Gif;