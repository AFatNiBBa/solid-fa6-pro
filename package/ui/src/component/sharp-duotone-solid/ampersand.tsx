
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ampersand` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ampersand?s=sharp-duotone-solid ampersand}
 * @preview ![ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/ampersand.svg)
 */
const Ampersand: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M112 32L80 32l0 32 0 65c0 28 10.5 54.9 29.3 75.5l31.2 34.1L76.8 286.4C48.6 307.6 32 340.7 32 376l0 72 0 32 32 0 192 0 17.1 0 9.5-14.2 27.6-41.4L361 480l86.7 0-16.1-17.6-84.9-92.9 63.9-95.8 17.8-26.6-53.3-35.5-17.8 26.6-55.1 82.6-67-73.3 39.9-29.9C303.4 196.4 320 163.3 320 128l0-64 0-32-32 0L112 32zM236.8 166.4l-44.9 33.7-35.4-38.7c-8.1-8.8-12.6-20.4-12.6-32.4l0-33 112 0 0 32c0 15.1-7.1 29.3-19.2 38.4zM115.2 337.6l68.7-51.5 81.9 89.6L238.9 416 96 416l0-40c0-15.1 7.1-29.3 19.2-38.4z" />
    </Icon>
);

export default Ampersand;