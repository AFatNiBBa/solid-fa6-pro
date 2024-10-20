
import { Icon } from "../../index";

/**
 * A component that renders the `gif` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=sharp-light gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM320 160l-32 0 0 16 0 160 0 16 32 0 0-16 0-160 0-16zm32 0l0 16 0 80 0 80 0 16 32 0 0-16 0-64 64 0 16 0 0-32-16 0-64 0 0-48 80 0 16 0 0-32-16 0-96 0-16 0zM128 256c0-35.3 28.7-64 64-64c14.4 0 27.7 4.8 38.4 12.8l19.2-25.6c-16-12.1-36-19.2-57.6-19.2c-53 0-96 43-96 96s43 96 96 96c21.6 0 41.6-7.1 57.6-19.2L256 328l0-8 0-56 0-16-16 0-56 0-16 0 0 32 16 0 40 0 0 31.4c-9.4 5.4-20.3 8.6-32 8.6c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default Gif;