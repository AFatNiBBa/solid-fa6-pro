
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kazoo` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kazoo?s=duotone kazoo}
 * @preview ![kazoo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kazoo.svg)
 */
const Kazoo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 216l0 80c0 14.2 9.4 26.7 23 30.7l192 56c2.9 .8 5.9 1.3 9 1.3l158 0c-46.3-23.9-78-72.3-78-128c0-1.7 0-3.5 .1-5.2s.2-3.4 .3-5.2c.2-3.4 .6-6.8 1.1-10.2c1-6.7 2.4-13.3 4.2-19.6c3.7-12.7 9.1-24.8 15.9-35.8C339.3 158 358.8 140 382 128l-158 0c-3 0-6 .4-9 1.3l-192 56C9.4 189.3 0 201.8 0 216zm404.7-3.3c-6.2 6.2-6.2 16.4 0 22.6L425.4 256l-20.7 20.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L448 278.6l20.7 20.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L470.6 256l20.7-20.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L448 233.4l-20.7-20.7c-6.2-6.2-16.4-6.2-22.6 0zM514 128c46.3 23.9 78 72.3 78 128c0 1.7 0 3.5-.1 5.2s-.2 3.4-.3 5.2c-.2 3.4-.6 6.8-1.1 10.2c-1 6.7-2.4 13.3-4.2 19.6c-3.7 12.7-9.1 24.8-15.9 35.8C556.7 354 537.2 372 514 384l94 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-94 0z" />
        <path d="M448 400a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-240a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default Kazoo;