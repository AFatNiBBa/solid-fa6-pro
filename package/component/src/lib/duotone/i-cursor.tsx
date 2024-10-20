
import { Icon, generic } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=duotone i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path class={generic.secondary} d="M32 256c0 17.7 14.3 32 32 32l32 0c0-21.3 0-42.7 0-64l-32 0c-17.7 0-32 14.3-32 32zm128-32l0 64 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0z" />
        <path d="M29.3 63.9C11.7 62.4-1.4 47 .1 29.3S17-1.4 34.7 .1l8 .7C76.8 3.6 106.8 19.7 128 43.7c21.2-24 51.2-40 85.4-42.9l8-.7c17.6-1.5 33.1 11.6 34.5 29.2s-11.6 33.1-29.2 34.5l-8 .7C185.5 67.3 160 95 160 128.3l0 255.3c0 33.3 25.5 61 58.7 63.8l8 .7c17.6 1.5 30.7 16.9 29.2 34.5s-16.9 30.7-34.5 29.2l-8-.7c-34.1-2.8-64.2-18.9-85.4-42.9c-21.2 24-51.2 40-85.4 42.9l-8 .7C17 513.4 1.6 500.3 .1 482.7s11.6-33.1 29.2-34.5l8-.7C70.5 444.7 96 417 96 383.7l0-255.3c0-33.3-25.5-61-58.7-63.8l-8-.7z" />
    </Icon>
);

export default ICursor;