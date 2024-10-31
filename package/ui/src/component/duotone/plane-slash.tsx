
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-slash?s=duotone plane-slash}
 * @preview ![plane-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plane-slash.svg)
 */
const PlaneSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 142c0 1.3 .2 2.6 .5 3.9L64 256 32.5 366.1c-.4 1.3-.5 2.6-.5 3.9c0 7.8 6.3 14 14 14l42 0c5 0 9.8-2.4 12.8-6.4L144 320l102.9 0-49 171.6c-2.9 10.2 4.8 20.4 15.4 20.4l56.2 0c11.5 0 22.1-6.2 27.8-16.1l65.3-114.3L41.5 128.7C36 130.6 32 135.9 32 142zM197.8 20.4l40.3 140.9L440.6 320l73.8 0c34.2 0 93.7-28 93.7-64c0-35-59.5-64-93.7-64l-116.6 0L297.2 16.1C291.5 6.2 280.9 0 269.4 0L213.2 0c-10.6 0-18.3 10.2-15.4 20.4z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default PlaneSlash;