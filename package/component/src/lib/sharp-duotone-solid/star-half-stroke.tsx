
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-half-stroke` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-half-stroke?s=sharp-duotone-solid star-half-stroke}
 * @preview ![star-half-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/star-half-stroke.svg)
 */
const StarHalfStroke: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M288 .1c0 40.1 0 80.1 0 120.1c12.4 23.3 24.7 46.6 37 70l12.9 24.4 27.1 4.7 78.1 13.5-55.2 56.8-19.2 19.7 3.9 27.3 11.3 78.4-71.1-35-24.7-12.1c-.1 20.8-.1 41.6-.1 62.3c35.2 17.4 70.4 34.7 105.5 51.9L454.4 512l-9.7-67.2L428 328.5l81.9-84.3 47.3-48.7L490.4 184 374.6 164 319.7 60C309.2 40 298.6 20 288 .1z" />
        <path d="M121.7 512L288 430.2 288 .1 201.5 164 18.9 195.6 148.1 328.5 121.7 512z" />
    </Icon>
);

export default StarHalfStroke;