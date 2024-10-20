
import { Icon } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=sharp-thin truck-pickup}
 * @preview ![truck-pickup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/truck-pickup.svg)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M232 32l-8 0 0 8 0 152L48 192l-16 0 0 16 0 160L8 368l-8 0 0 16 8 0 24 0 16 0 32 0c0 53 43 96 96 96s96-43 96-96l96 0c0 53 43 96 96 96s96-43 96-96l32 0 16 0 24 0 8 0 0-16-8 0-24 0 0-160 0-16-16 0-77.8 0-3.9-5L390.3 35l-2.4-3L384 32 232 32zM592 208l0 160-33.3 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80l-98.7 0c-7.6-45.4-47.1-80-94.7-80s-87.1 34.6-94.7 80L48 368l0-160 544 0zm-98.2-16L240 192l0-144 140.1 0L493.8 192zM96 384a80 80 0 1 1 160 0A80 80 0 1 1 96 384zm368-80a80 80 0 1 1 0 160 80 80 0 1 1 0-160z" />
    </Icon>
);

export default TruckPickup;