
import { Icon, generic } from "../../index";

/**
 * A component that renders the `9` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/9?s=duotone 9}
 * @preview ![9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/9.svg)
 */
const $9: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M64 192a96 96 0 1 0 192 0A96 96 0 1 0 64 192zm87.5 159.8C67.1 347.4 0 277.5 0 192C0 103.6 71.6 32 160 32s160 71.6 160 160c0 2.6-.1 5.3-.2 7.9c-1.7 35.7-15.2 70-38.4 97.4l-145 171.4c-11.4 13.5-31.6 15.2-45.1 3.8s-15.2-31.6-3.8-45.1l63.9-75.6z" />
    </Icon>
);

export default $9;