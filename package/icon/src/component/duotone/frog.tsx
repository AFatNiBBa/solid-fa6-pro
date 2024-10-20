
import { Icon, generic } from "../../index";

/**
 * A component that renders the `frog` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/frog?s=duotone frog}
 * @preview ![frog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/frog.svg)
 */
const Frog: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 35.3 28.7 64 64 64l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-90.2 0 37.1-37.1c3.4-3.4 6.4-7.1 9-10.9c18.7-28 15.7-66.2-9-90.9c-24.6-24.6-62.6-27.7-90.5-9.2c-4 2.6-7.8 5.7-11.3 9.2c-.2 .2-.2 .2-.3 .3L123 347.6c-6.4 6.1-16.5 5.8-22.6-.6s-5.8-16.5 .6-22.6l73.6-70.1c40.6-40.5 106.4-40.4 146.9 .1c28.6 28.6 37.1 69.7 25.4 105.7L457.4 470.6c6 6 14.1 9.4 22.6 9.4l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0-92.5-92.5 144.5-82.1c18.9-10.8 30.7-30.9 30.7-52.7c0-26.6-17.3-50.1-42.8-57.9l-85.6-26.3c.2 2.5 .3 5 .3 7.5c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-1.2 0-2.5 .1-3.7s.1-2.5 .3-3.7c.2-2.4 .6-4.8 1-7.2C127 112.9 0 249.6 0 416z" />
        <path d="M368 192a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-104a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Frog;