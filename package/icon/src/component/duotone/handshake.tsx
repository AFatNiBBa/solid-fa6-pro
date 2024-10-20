
import { Icon, generic } from "../../index";

/**
 * A component that renders the `handshake` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/handshake?s=duotone handshake}
 * @preview ![handshake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/handshake.svg)
 */
const Handshake: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M208.3 186.4c-.1 .9-.2 1.9-.2 2.8c-.1 .9-.1 1.9-.1 2.8c0 9.7 2.9 19.4 8.9 27.9c15.4 21.6 45.4 26.6 67 11.2l57.2-40.8c4.4 4 8.8 8 13.1 12L496.4 332.6c5.5 5 9.5 11.1 12.1 17.5c.3 .6 .5 1.2 .7 1.8l2.7 0 0-224-1.5 0-71-47.3C423.2 69.8 404.1 64 384.5 64c-20.7 0-40.9 6.5-57.7 18.5c-3.1 2.2-6.2 4.4-9.3 6.7c-29.8 21.3-59.5 42.5-89.3 63.8c-.8 .6-1.6 1.2-2.4 1.8s-1.5 1.3-2.2 1.9c-1.4 1.3-2.8 2.7-4 4.2c-2.5 2.9-4.6 6.1-6.3 9.5s-3 6.9-3.8 10.5c-.4 1.8-.8 3.7-1 5.5zM544 128l0 224c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16l-80 0zm64 208a16 16 0 1 1 -32 0 16 16 0 1 1 32 0z" />
        <path d="M156.2 352L128 352l0-224 72-48c15.6-10.4 34-16 52.8-16c22.7 0 44.7 8.1 61.9 22.9l2.7 2.3-89.3 63.8c-21.6 15.4-26.6 45.4-11.2 67s45.4 26.6 67 11.2l57.2-40.8 13.1 12L496.4 332.6c5.5 5 9.6 11.1 12.1 17.5c6.6 16.6 3.7 36.2-9.2 50.3c-17.9 19.5-48.3 20.9-67.8 2.9l-7.8-7.1c-.9 10.1-5 20.1-12.4 28.2c-17.9 19.5-48.3 20.9-67.8 2.9l-17-15.6c-1.9 7.4-5.6 14.5-11.1 20.6c-17.9 19.6-48.2 21-67.8 3.1L156.2 352zM0 144c0-8.8 7.2-16 16-16l80 0 0 224c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32L0 144zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Handshake;