
import { Icon } from "../../index";

/**
 * A component that renders the `balloon` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/balloon?s=sharp-regular balloon}
 * @preview ![balloon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/balloon.svg)
 */
const Balloon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M196.6 392.6l1-.7c.9-.7 2.4-1.8 4.3-3.2c3.9-2.9 9.5-7.3 16.4-13c13.8-11.5 32.1-28 50.2-47.9C306.6 285.8 336 237.3 336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 45.3 29.4 93.8 67.5 135.7c18.1 19.9 36.4 36.4 50.2 47.9c6.9 5.7 12.5 10.1 16.4 13c1.9 1.5 3.4 2.5 4.3 3.2l1 .7 .1 .1s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l4.4 3.1 4.4-3.1s0 0 0 0s0 0 0 0s0 0 0 0s0 0 0 0l.1-.1zM384 192c0 128-160 240-160 240l12.8 32L256 512l-51.7 0-24.6 0L128 512l19.2-48L160 432S0 320 0 192C0 86 86 0 192 0S384 86 384 192zm-256 8l0 8-48 0 0-8c0-66.3 53.7-120 120-120l8 0 0 48-8 0c-39.8 0-72 32.2-72 72z" />
    </Icon>
);

export default Balloon;