
import { Icon } from "../../index";

/**
 * A component that renders the `truck-clock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-clock?s=sharp-solid truck-clock}
 * @preview ![truck-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/truck-clock.svg)
 */
const TruckClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 0L0 0 0 416l64 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0 32 0 0-64-32 0 0-64 0-32 0-32 0-13.3-9.4-9.4-96-96L493.3 96 480 96l-64 0 0-96zM544 240l0 16-128 0 0-96 48 0 2.7 0L544 237.3l0 2.7zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM96 176a112 112 0 1 1 224 0A112 112 0 1 1 96 176zM224 96l-32 0 0 16 0 64 0 16 16 0 32 0 16 0 0-32-16 0-16 0 0-48 0-16z" />
    </Icon>
);

export default TruckClock;