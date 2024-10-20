
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=duotone truck-pickup}
 * @preview ![truck-pickup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-pickup.svg)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M80 400a80 80 0 1 0 160 0A80 80 0 1 0 80 400zm320 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M288 96l0 96 157.4 0L368.6 96 288 96zM418.6 56L527.4 192l48.6 0c17.7 0 32 14.3 32 32l0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32l-26.8 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64l-117.6 0c-18-37.8-56.5-64-101.2-64s-83.2 26.2-101.2 64L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-64c0-17.7 14.3-32 32-32l160 0 0-112c0-26.5 21.5-48 48-48l96.6 0c19.4 0 37.8 8.8 50 24z" />
    </Icon>
);

export default TruckPickup;