
import { Icon } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=sharp-regular thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M264.6 218.2l17.9 13c18.8 13.8 32.7 32.1 41.9 49.6c5.1 9.7 8 17.7 9.7 23.2L216 304l0-88 0-24-48 0 0 24 0 88L49.4 304c.2-1 .5-2.1 .9-3.2c1.9-6.5 4.9-14.4 9.4-22.9c9-17 22.6-34.5 41.2-47.6l18.6-13 1.7-22.6L132.4 48l119.1 0 11.4 148.2 1.7 22zM216 352l120 0 48 0 0-40c0-2.3-.2-4.9-.7-8c-4.1-25.8-26-77.6-72.5-111.5L299.7 48 328 48l24 0 0-48L328 0 296 0 88 0 56 0 32 0l0 48 24 0 28.3 0-11 143C26.1 224.1 4.2 275.6 .6 304c-.4 2.9-.6 5.6-.6 8l0 40 48 0 120 0 0 136 0 24 48 0 0-24 0-136z" />
    </Icon>
);

export default Thumbtack;