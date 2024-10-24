
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=sharp-duotone-solid kazoo}
 * @preview ![kazoo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kazoo.svg)
 */
const Kazoo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l219.4 64L382 384c-46.3-23.9-78-72.3-78-128c0-1.7 0-3.5 .1-5.2s.2-3.4 .3-5.2c.2-3.4 .6-6.8 1.1-10.2c1-6.7 2.4-13.3 4.2-19.6c3.7-12.7 9.1-24.8 15.9-35.8C339.3 158 358.8 140 382 128l-162.5 0L0 192zm393.4 32l11.3 11.3L425.4 256l-20.7 20.7L393.4 288 416 310.6l11.3-11.3L448 278.6l20.7 20.7L480 310.6 502.6 288l-11.3-11.3L470.6 256l20.7-20.7L502.6 224 480 201.4l-11.3 11.3L448 233.4l-20.7-20.7L416 201.4 393.4 224zM514 128c46.3 23.9 78 72.3 78 128c0 1.7 0 3.5-.1 5.2s-.2 3.4-.3 5.2c-.2 3.4-.6 6.8-1.1 10.2c-1 6.7-2.4 13.3-4.2 19.6c-3.7 12.7-9.1 24.8-15.9 35.8C556.7 354 537.2 372 514 384l126 0 0-256-126 0z" />
        <path d="M448 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-240a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Kazoo;