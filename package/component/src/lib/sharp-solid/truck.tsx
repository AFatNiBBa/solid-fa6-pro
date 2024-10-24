
import { Icon } from "../../index";

/**
 * A component that renders the `truck` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=sharp-solid truck}
 * @preview ![truck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck.svg)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 0L416 0l0 96 64 0 13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 32 0 32 0 64 32 0 0 64-32 0-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96L0 416 0 0zM544 237.3L466.7 160l-2.7 0-48 0 0 96 128 0 0-16 0-2.7zM208 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm272 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default Truck;