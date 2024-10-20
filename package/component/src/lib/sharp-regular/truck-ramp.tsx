
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=sharp-regular truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M376 0L352 0l0 24 0 348.7L26 456.8l-23.2 6 12 46.5 23.2-6 378.2-97.5C419.1 464.9 468.1 512 528 512c61.9 0 112-50.1 112-112s-50.1-112-112-112c-45.3 0-84.3 26.9-102 65.6c0 0 0 0 0 0l-26 6.7L400 48l216 0 24 0 0-48L616 0 376 0zM528 336a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default TruckRamp;