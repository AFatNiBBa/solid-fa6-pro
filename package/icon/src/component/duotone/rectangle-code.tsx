
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=duotone rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM96 256c0 6.8 2.9 13.3 7.9 17.8c26.7 24 53.3 48 80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9c-20.1-18.1-40.1-36.1-60.2-54.2c20.1-18.1 40.1-36.1 60.2-54.2c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8c-26.7 24-53.3 48-80 72c-5.1 4.6-7.9 11-7.9 17.8zm198.2-88.1c-8.9 9.9-8.1 25 1.8 33.9c20.1 18.1 40.1 36.1 60.2 54.2c-20.1 18.1-40.1 36.1-60.2 54.2c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8c26.7-24 53.3-48 80-72c5.1-4.6 7.9-11 7.9-17.8s-2.9-13.3-7.9-17.8c-26.7-24-53.3-48-80-72c-9.9-8.9-25-8.1-33.9 1.8z" />
        <path d="M216.1 201.8c9.9-8.9 10.7-24 1.8-33.9s-24-10.7-33.9-1.8l-80 72c-5.1 4.6-7.9 11-7.9 17.8s2.9 13.3 7.9 17.8l80 72c9.9 8.9 25 8.1 33.9-1.8s8.1-25-1.8-33.9L155.9 256l60.2-54.2zm79.9 0L356.1 256l-60.2 54.2c-9.9 8.9-10.7 24-1.8 33.9s24 10.7 33.9 1.8l80-72c5.1-4.6 7.9-11 7.9-17.8s-2.9-13.3-7.9-17.8l-80-72c-9.9-8.9-25-8.1-33.9 1.8s-8.1 25 1.8 33.9z" />
    </Icon>
);

export default RectangleCode;