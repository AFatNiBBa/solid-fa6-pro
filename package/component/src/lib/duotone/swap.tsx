
import { Icon, generic } from "../../index";

/**
 * A component that renders the `swap` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap?s=duotone swap}
 * @preview ![swap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/swap.svg)
 */
const Swap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M288 160l0 96 64 0 0-96c0-35.3 28.7-64 64-64s64 28.7 64 64l0 192-48 0c-12.4 0-23.7 7.2-29 18.4s-3.6 24.5 4.4 34.1l80 96c6.1 7.3 15.1 11.5 24.6 11.5s18.5-4.2 24.6-11.5l80-96c7.9-9.5 9.7-22.8 4.4-34.1s-16.6-18.4-29-18.4l-48 0 0-192c0-70.7-57.3-128-128-128s-128 57.3-128 128z" />
        <path d="M208 160c12.4 0 23.7-7.2 29-18.4s3.6-24.5-4.4-34.1l-80-96C146.5 4.2 137.5 0 128 0s-18.5 4.2-24.6 11.5l-80 96c-7.9 9.5-9.7 22.8-4.4 34.1S35.6 160 48 160l48 0 0 192c0 70.7 57.3 128 128 128s128-57.3 128-128l0-96-64 0 0 96c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-192 48 0z" />
    </Icon>
);

export default Swap;