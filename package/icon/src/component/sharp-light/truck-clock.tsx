
import { Icon } from "../../index";

/**
 * A component that renders the `truck-clock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-clock?s=sharp-light truck-clock}
 * @preview ![truck-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/truck-clock.svg)
 */
const TruckClock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32l0 352 37.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64L384 384l0-352L32 32zM64 416l-32 0L0 416l0-32L0 32 0 0 32 0 384 0l32 0 0 32 0 64 80 0 7.4 0 4.8 5.6 96 112 3.9 4.5 0 5.9 0 160 16 0 16 0 0 32-16 0-16 0-32 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96zM416 128l0 96 154.9 0-82.3-96L416 128zm0 128l0 88.4c17-15.2 39.4-24.4 64-24.4c41.8 0 77.4 26.7 90.5 64l5.5 0 0-128-160 0zM224 416A64 64 0 1 0 96 416a64 64 0 1 0 128 0zm256 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM208 256a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-192a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm16 64l0 32 16 0 16 0 0 32-16 0-32 0-16 0 0-16 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default TruckClock;