
import { Icon } from "../../index";

/**
 * A component that renders the `church` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/church?s=sharp-regular church}
 * @preview ![church](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/church.svg)
 */
const Church: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 24l0-24L296 0l0 24 0 24-32 0-24 0 0 48 24 0 32 0 0 26.9L171 203.9l-11 7.1 0 13.1 0 240L48 464l0-106.9 80-51.8 0-57.2L11 323.9 0 330.9 0 344 0 488l0 24 24 0 168 0s0 0 0 0l256 0 8 0 24 0 136 0 24 0 0-24 0-144 0-13.1-11-7.1L512 248.1l0 57.2 80 51.8L592 464l-112 0 0-240 0-13.1-11-7.1L344 122.9 344 96l32 0 24 0 0-48-24 0-32 0 0-24zM208 237.1l112-72.5 112 72.5L432 464l-64 0 0-96c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 96-64 0 0-226.9z" />
    </Icon>
);

export default Church;