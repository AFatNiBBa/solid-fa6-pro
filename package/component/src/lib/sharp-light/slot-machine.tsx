
import { Icon } from "../../index";

/**
 * A component that renders the `slot-machine` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slot-machine?s=sharp-light slot-machine}
 * @preview ![slot-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/slot-machine.svg)
 */
const SlotMachine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 416L96 416l0 64 288 0 32 0 0-64zm-32 96L96 512l-32 0 0-32 0-64-32 0L0 416l0-32L0 128 0 96l32 0 32 0 0-64L64 0 96 0 416 0l32 0 0 32 0 64 32 0 32 0 0 32 0 256 0 32-32 0-32 0 0 64 128 0 0-258.7c-18.6-6.6-32-24.4-32-45.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 20.9-13.4 38.7-32 45.3L608 496l0 16-16 0-144 0-32 0-32 0s0 0 0 0zM608 176a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM416 32L96 32l0 64 320 0 0-64zm64 96L32 128l0 256 448 0 0-256zm-48 48l0 18.9-1 2.7L379.1 336l-34.2 0 48-128L352 208l-16 0 0-32 16 0 64 0 16 0zM311 197.6L259.1 336l-34.2 0 48-128L232 208l-16 0 0-32 16 0 64 0 16 0 0 18.9-1 2.7zm-120 0L139.1 336l-34.2 0 48-128L112 208l-16 0 0-32 16 0 64 0 16 0 0 18.9-1 2.7z" />
    </Icon>
);

export default SlotMachine;