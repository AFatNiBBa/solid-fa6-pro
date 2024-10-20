
import { Icon } from "../../index";

/**
 * A component that renders the `slot-machine` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slot-machine?s=sharp-thin slot-machine}
 * @preview ![slot-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/slot-machine.svg)
 */
const SlotMachine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M432 416L80 416l0 80 304 0 48 0 0-80zm-48 96L80 512l-16 0 0-16 0-80-48 0L0 416l0-16L0 112 0 96l16 0 48 0 0-80L64 0 80 0 432 0l16 0 0 16 0 80 48 0 16 0 0 16 0 288 0 16-16 0-48 0 0 80 136 0 0-272.7c-22.7-3.8-40-23.6-40-47.3c0-26.5 21.5-48 48-48s48 21.5 48 48c0 23.8-17.3 43.5-40 47.3L600 504l0 8-8 0-144 0-16 0-48 0s0 0 0 0zM624 176a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM432 16L80 16l0 80 352 0 0-80zm64 96L16 112l0 288 480 0 0-288zM88 176l8 0 72 0 11.7 0-4.2 10.9L117.5 336l-17.2 0 56-144L96 192l-8 0 0-16zM228.3 336l56-144L224 192l-8 0 0-16 8 0 72 0 11.7 0-4.2 10.9L245.5 336l-17.2 0zm128 0l56-144L352 192l-8 0 0-16 8 0 72 0 11.7 0-4.2 10.9L373.5 336l-17.2 0z" />
    </Icon>
);

export default SlotMachine;