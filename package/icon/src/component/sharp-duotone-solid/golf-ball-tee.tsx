
import { Icon, generic } from "../../index";

/**
 * A component that renders the `golf-ball-tee` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/golf-ball-tee?s=sharp-duotone-solid golf-ball-tee}
 * @preview ![golf-ball-tee](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/golf-ball-tee.svg)
 */
const GolfBallTee: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 192c0 66.8 34.1 125.6 85.8 160l212.3 0c51.7-34.4 85.8-93.2 85.8-160C384 86 298 0 192 0S0 86 0 192zm176 12.3c4.2 1.9 8.9 3 13.8 3c18.5 0 33.5-15 33.5-33.5c0-4.9-1.1-9.6-3-13.8c11.6 5.3 19.7 16.9 19.7 30.5c0 18.5-15 33.5-33.5 33.5c-13.6 0-25.3-8.1-30.5-19.7zm18.8 82.8c4.2 1.9 8.9 3 13.8 3c18.5 0 33.5-15 33.5-33.5c0-4.9-1.1-9.6-3-13.8c11.6 5.3 19.7 16.9 19.7 30.5c0 18.5-15 33.5-33.5 33.5c-13.6 0-25.3-8.1-30.5-19.7zM256 220.3c4.2 1.9 8.9 3 13.8 3c18.5 0 33.5-15 33.5-33.5c0-4.9-1.1-9.6-3-13.8c11.6 5.3 19.7 16.9 19.7 30.5c0 18.5-15 33.5-33.5 33.5c-13.6 0-25.3-8.1-30.5-19.7z" />
        <path d="M288 384H96v64h64v64h64V448h64V384z" />
    </Icon>
);

export default GolfBallTee;