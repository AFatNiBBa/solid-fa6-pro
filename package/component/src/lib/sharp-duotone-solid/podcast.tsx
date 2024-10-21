
import { Icon, generic } from "../../index";

/**
 * A component that renders the `podcast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/podcast?s=sharp-duotone-solid podcast}
 * @preview ![podcast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/podcast.svg)
 */
const Podcast: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 224c0 94.1 58 174.6 140.2 207.8L132 374c-50.4-31-84-86.6-84-150c0-97.2 78.8-176 176-176s176 78.8 176 176c0 63.5-33.6 119.1-84 150l-8.3 57.8C390 398.6 448 318.1 448 224C448 100.3 347.7 0 224 0S0 100.3 0 224zm80 0c0 43 18.8 81.5 48.7 107.9L135 324l23.7-29.6C139.8 276.9 128 251.8 128 224c0-53 43-96 96-96s96 43 96 96c0 27.8-11.8 52.9-30.7 70.4L313 324l6.3 7.9C349.2 305.5 368 267 368 224c0-79.5-64.5-144-144-144S80 144.5 80 224z" />
        <path d="M224 168a56 56 0 1 1 0 112 56 56 0 1 1 0-112zM184 512L160 344l32-40 64 0 32 40L264 512l-80 0z" />
    </Icon>
);

export default Podcast;