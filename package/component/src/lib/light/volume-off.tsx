
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=light volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M288 66.7L151.6 188c-2.9 2.6-6.7 4-10.6 4l-85 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l85 0c3.9 0 7.7 1.4 10.6 4L288 445.3l0-378.6zM270.4 39.5c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8l0 388.4c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5l10.6-12-10.6 12L134.9 352 56 352c-30.9 0-56-25.1-56-56l0-80c0-30.9 25.1-56 56-56l78.9 0L270.4 39.5z" />
    </Icon>
);

export default VolumeOff;