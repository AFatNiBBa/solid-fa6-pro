
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-left` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-left?s=duotone up-left}
 * @preview ![up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-left.svg)
 */
const UpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M142.6 302.6L276.7 436.7c7.2 7.2 17.1 11.3 27.3 11.3s20.1-4.1 27.3-11.3l41.4-41.4c7.2-7.2 11.3-17.1 11.3-27.3s-4.1-20.1-11.3-27.3L238.6 206.6l-96 96z" />
        <path d="M48 80H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-240 240c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V112c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default UpLeft;