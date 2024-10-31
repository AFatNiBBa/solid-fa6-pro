
import { Icon } from "../../index";

/**
 * A component that renders the `volume-off` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/volume-off?s=thin volume-off}
 * @preview ![volume-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/volume-off.svg)
 */
const VolumeOff: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M290.2 48c-3.4 0-6.6 1.2-9.2 3.5L143.2 174c-1.5 1.3-3.4 2-5.3 2L56 176c-22.1 0-40 17.9-40 40l0 80c0 22.1 17.9 40 40 40l81.9 0c2 0 3.9 .7 5.3 2L281 460.5c2.5 2.2 5.8 3.5 9.2 3.5c7.6 0 13.8-6.2 13.8-13.8l0-388.4c0-7.6-6.2-13.8-13.8-13.8zm-19.8-8.5c5.5-4.8 12.5-7.5 19.8-7.5C306.7 32 320 45.3 320 61.8l0 388.4c0 16.5-13.3 29.8-29.8 29.8c-7.3 0-14.3-2.7-19.8-7.5L134.9 352 56 352c-30.9 0-56-25.1-56-56l0-80c0-30.9 25.1-56 56-56l78.9 0L270.4 39.5z" />
    </Icon>
);

export default VolumeOff;