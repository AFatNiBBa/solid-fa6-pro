
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=duotone vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M41.3 192c18.2 0 36.5 0 54.7 0c1.1 0 2.2 .1 3.2 .2s2.1 .3 3.1 .5c2.1 .4 4 1 5.9 1.8c16.2-38.9 47.3-70 86.2-86.2c-1.6-3.8-2.4-7.9-2.4-12.3l0-54.7C119.8 62.8 62.8 119.8 41.3 192zm0 128C62.8 392.2 119.8 449.2 192 470.7c0-18.2 0-36.5 0-54.7c0-.3 0-.6 0-.9l0-.8c0-.5 .1-1 .1-1.6c.1-1.1 .3-2.1 .5-3.1c.4-2.1 1-4 1.8-5.9c-38.8-16.2-69.8-47.2-86-85.9c-3.9 1.3-8 2.2-12.4 2.2l-54.7 0zM317.6 108.3c39 16.4 70 47.4 86.2 86.2c3.8-1.6 7.9-2.4 12.3-2.4c18.2 0 36.5 0 54.7 0C449.2 119.8 392.2 62.8 320 41.3L320 96c0 .5 0 1.1 0 1.6s-.1 1.1-.1 1.6c-.1 1.1-.3 2.1-.5 3.1c-.4 2-1 4-1.8 5.9zm0 295.5c1.6 3.8 2.4 7.9 2.4 12.3l0 54.7c72.2-21.5 129.2-78.5 150.7-150.7L416 320c-.5 0-1.1 0-1.6 0s-1.1-.1-1.6-.1c-1.1-.1-2.1-.3-3.1-.5c-2.1-.4-4-1-5.9-1.8c-16.3 38.9-47.2 69.8-86.2 86.2z" />
        <path d="M240 80l32 0 0-32-32 0 0 32zM192 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM48 272l32 0 0-32-32 0 0 32zM0 224c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM240 432l0 32 32 0 0-32-32 0zm-16-48l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32zM432 272l32 0 0-32-32 0 0 32zm-48-48c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64z" />
    </Icon>
);

export default VectorCircle;