
import { Icon } from "../../index";

/**
 * A component that renders the `axe` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/axe?s=sharp-regular axe}
 * @preview ![axe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/axe.svg)
 */
const Axe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 448l64 64L313.4 262.6l-64-64L0 448zM400 48L385.9 33.9 352 0 318.1 33.9 257.9 94.1 224 128l33.9 33.9L384 288l0 80 0 48 32 0c5.4 0 10.7-.2 16-.6C543 407.6 631.6 319 639.4 208c.4-5.3 .6-10.6 .6-16l0-32-48 0-80 0-48-48 48-48L448 0 400 48zM512 208l79.3 0c-7.6 84.4-74.8 151.7-159.3 159.3l0-79.3 0-19.9-14.1-14.1L291.9 128 352 67.9 478.1 193.9 492.1 208l19.9 0z" />
    </Icon>
);

export default Axe;