
import { Icon } from "../../index";

/**
 * A component that renders the `truck` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=sharp-regular truck}
 * @preview ![truck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/truck.svg)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M368 48l0 320-48 0-76.8 0c-16.6-28.7-47.6-48-83.2-48s-66.6 19.3-83.2 48L48 368 48 48l320 0zm16 368c0 53 43 96 96 96s96-43 96-96l40 0 24 0 0-48-24 0-8 0 0-136 0-9.9-7-7L489 103l-7-7L472 96l-56 0 0-48 0-48L368 0 48 0 0 0 0 48 0 368l0 48 48 0 16 0c0 53 43 96 96 96s96-43 96-96l64 0 48 0 8 0 8 0zm78.1-272l96 96L416 240l0-96 46.1 0zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Truck;