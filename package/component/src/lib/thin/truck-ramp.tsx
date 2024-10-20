
import { Icon } from "../../index";

/**
 * A component that renders the `truck-ramp` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-ramp?s=thin truck-ramp}
 * @preview ![truck-ramp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/truck-ramp.svg)
 */
const TruckRamp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M424 0c-39.8 0-72 32.2-72 72l0 325.1L5.8 496.3c-4.2 1.2-6.7 5.6-5.5 9.9s5.6 6.7 9.9 5.5L416.1 395.4c-.1 1.5-.1 3-.1 4.6c0 61.9 50.1 112 112 112s112-50.1 112-112s-50.1-112-112-112c-54.4 0-99.7 38.8-109.9 90.2L368 392.5 368 72c0-30.9 25.1-56 56-56l208 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L424 0zM528 304a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
    </Icon>
);

export default TruckRamp;