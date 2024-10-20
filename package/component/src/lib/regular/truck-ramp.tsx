
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=regular truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M440 0c-48.6 0-88 39.4-88 88l0 285.8L17.7 464.8C4.9 468.3-2.6 481.5 .8 494.3s16.7 20.3 29.5 16.8L416.2 406c3.1 59.1 52 106 111.8 106c61.9 0 112-50.1 112-112s-50.1-112-112-112c-45.3 0-84.3 26.9-102 65.6l-.4 .1-25.7 7L400 88c0-22.1 17.9-40 40-40l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L440 0zm88 336a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default TruckRamp;