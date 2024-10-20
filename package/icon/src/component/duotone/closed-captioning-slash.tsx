
import { Icon, generic } from "../../index";

/**
 * A component that renders the `closed-captioning-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning-slash?s=duotone closed-captioning-slash}
 * @preview ![closed-captioning-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/closed-captioning-slash.svg)
 */
const ClosedCaptioningSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 121.2L32 416c0 35.3 28.7 64 64 64l391.4 0L295 328.4c-16.8 14.7-38.9 23.6-63 23.6c-53 0-96-43-96-96c0-16 3.9-31.1 10.8-44.3L32 121.2zM76.8 34.9L236.6 160.1c26.6 1.2 50.4 13.3 67 31.9c6.1 6.8 7.6 16.2 4.7 24.3c7.5 5.8 14.9 11.7 22.4 17.5c10-42.3 48-73.8 93.4-73.8c28.4 0 54 12.4 71.5 32c8.8 9.9 8 25-1.9 33.9s-25 8-33.9-1.9c-8.8-9.9-21.6-16-35.8-16c-26.5 0-48 21.5-48 48c0 5.4 .9 10.5 2.5 15.4l41.4 32.5c1.3 .1 2.7 .2 4.1 .2c14.2 0 27-6.1 35.8-16c8.8-9.9 24-10.7 33.9-1.9s10.7 24 1.9 33.9c-7.8 8.7-17.2 16-27.7 21.4L600.8 445.6c4.6-8.8 7.2-18.9 7.2-29.6l0-320c0-35.3-28.7-64-64-64L96 32c-6.7 0-13.1 1-19.2 2.9zM184 256c0 26.5 21.5 48 48 48c8.7 0 16.9-2.3 23.9-6.4l-70-55.1c-1.3 4.3-1.9 8.8-1.9 13.5z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default ClosedCaptioningSlash;