
import { Icon } from "../../index";

/**
 * A component that renders the `truck-clock` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-clock?s=sharp-regular truck-clock}
 * @preview ![truck-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/truck-clock.svg)
 */
const TruckClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 48l0 320 28.8 0c16.6-28.7 47.6-48 83.2-48s66.6 19.3 83.2 48l76.8 0 48 0 0-320L48 48zM480 512c-53 0-96-43-96-96l-8 0-8 0-48 0-64 0c0 53-43 96-96 96s-96-43-96-96l-16 0L0 416l0-48L0 48 0 0 48 0 368 0l48 0 0 48 0 48 56 0 9.9 0 7 7L601 215l7 7 0 9.9 0 136 8 0 24 0 0 48-24 0-40 0c0 53-43 96-96 96zM416 240l142.1 0-96-96L416 144l0 96zM160 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm368-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 192a112 112 0 1 1 224 0A112 112 0 1 1 96 192zm128-64l-32 0 0 16 0 48 0 16 16 0 32 0 16 0 0-32-16 0-16 0 0-32 0-16z" />
    </Icon>
);

export default TruckClock;