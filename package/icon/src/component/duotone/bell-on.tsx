
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=duotone bell-on}
 * @preview ![bell-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell-on.svg)
 */
const BellOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 384c0 4.4 .9 8.9 2.8 13.1C104 408.6 115.4 416 128 416l384 0c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C497.3 319.2 480 273.9 480 226.8l0-18.8c0-77.4-55-142-128-156.8L352 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 19.2C215 66 160 130.6 160 208l0 18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-5.3 6-8.1 13.6-8.1 21.3z" />
        <path d="M586.7 53.5c11.9-5.9 16.7-20.3 10.7-32.2s-20.3-16.7-32.2-10.7l-64 32c-11.9 5.9-16.7 20.3-10.7 32.2s20.3 16.7 32.2 10.7l64-32zM0 200c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zm512 0c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24zM42.5 21.3c-5.9 11.9-1.1 26.3 10.7 32.2l64 32c11.9 5.9 26.3 1.1 32.2-10.7s1.1-26.3-10.7-32.2l-64-32C62.9 4.6 48.5 9.4 42.5 21.3zm322.7 472c12-12 18.7-28.3 18.7-45.3l-64 0-64 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
    </Icon>
);

export default BellOn;