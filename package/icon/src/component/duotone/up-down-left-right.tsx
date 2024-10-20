
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=duotone up-down-left-right}
 * @preview ![up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-down-left-right.svg)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M162.4 108.2c5 12 16.6 19.8 29.6 19.8l32 0 0 96 64 0 0-96 32 0c12.9 0 24.6-7.8 29.6-19.8c1.6-4 2.4-8.1 2.4-12.2c0-8.3-3.3-16.5-9.4-22.6l-64-64C272.4 3.1 264.2 0 256 0s-16.4 3.1-22.6 9.4l-64 64c-9.2 9.2-11.9 22.9-6.9 34.9zm0 295.5c-5 12-2.2 25.7 6.9 34.9l64 64c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l64-64c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8l-32 0 0-96c-21.3 0-42.7 0-64 0l0 96-32 0c-12.9 0-24.6 7.8-29.6 19.8z" />
        <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l64-64c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 32 256 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c12.5 12.5 12.5 32.8 0 45.3l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-256 0 0 32c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-64-64z" />
    </Icon>
);

export default UpDownLeftRight;