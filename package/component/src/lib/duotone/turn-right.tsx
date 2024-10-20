
import { Icon, generic } from "../../index";

/**
 * A component that renders the `turn-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-right?s=duotone turn-right}
 * @preview ![turn-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/turn-right.svg)
 */
const TurnRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304c0-70.7 57.3-128 128-128l192 0 0 96-192 0c-17.7 0-32 14.3-32 32l0 144c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 304z" />
        <path d="M360.5 70.6c-7-6.6-17.2-8.4-26-4.6S320 78.4 320 88l0 272c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136z" />
    </Icon>
);

export default TurnRight;