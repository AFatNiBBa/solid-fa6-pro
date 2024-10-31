
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=sharp-light truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 0L352 0l0 16 0 368 0 2.9L20 472.5l-15.5 4 8 31 15.5-4L416.1 403.4C417.8 463.7 467.3 512 528 512c61.9 0 112-50.1 112-112s-50.1-112-112-112c-51.2 0-94.4 34.4-107.7 81.3l-.3 .1-36 9.3L384 32l240 0 16 0 0-32L624 0 368 0zM528 320a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default TruckRamp;