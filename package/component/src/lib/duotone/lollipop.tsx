
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lollipop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lollipop?s=duotone lollipop}
 * @preview ![lollipop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lollipop.svg)
 */
const Lollipop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M303.2 348.5c17.5-12.5 32.8-27.8 45.3-45.3L502.6 457.4c6.2 6.2 9.4 14.4 9.4 22.6s-3.1 16.4-9.4 22.6s-14.4 9.4-22.6 9.4s-16.4-3.1-22.6-9.4L303.2 348.5z" />
        <path d="M48 192c0 57.4 46.6 104 104 104l8 0c53 0 96-43 96-96l0-8c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-8c0-13.3 10.7-24 24-24s24 10.7 24 24l0 8c0 39.8-32.2 72-72 72s-72-32.2-72-72c0-61.9 50.1-112 112-112s112 50.1 112 112l0 8c0 61.6-38.7 114.2-93.2 134.8C281.4 325.6 336 265.2 336 192c0-79.5-64.5-144-144-144S48 112.5 48 192zM0 192a192 192 0 1 1 384 0A192 192 0 1 1 0 192z" />
    </Icon>
);

export default Lollipop;