
import { Icon } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=sharp-solid compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 512C178.6 512 64 397.4 64 256c0-33.6 6.5-65.8 18.3-95.2L228.1 275.7 192 384l121.9-40.6L468.1 464.8C426.3 494.5 375.2 512 320 512zM536 393.4l84.9 65.9 19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1l19 14.7 85 66C180.1 31.1 246.4 0 320 0C461.4 0 576 114.6 576 256c0 50.6-14.7 97.7-40 137.4zM270.4 187.2l125.4 97.3L448 128 270.4 187.2z" />
    </Icon>
);

export default CompassSlash;