
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=regular volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M272 102.3L159.9 201.9c-4.4 3.9-10.1 6.1-15.9 6.1l-88 0c-4.4 0-8 3.6-8 8l0 80c0 4.4 3.6 8 8 8l88 0c5.9 0 11.6 2.2 15.9 6.1L272 409.7l0-307.3zm-1.6-62.8c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8l0 388.4c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5L134.9 352 56 352c-30.9 0-56-25.1-56-56l0-80c0-30.9 25.1-56 56-56l78.9 0L270.4 39.5z" />
    </Icon>
);

export default VolumeOff;