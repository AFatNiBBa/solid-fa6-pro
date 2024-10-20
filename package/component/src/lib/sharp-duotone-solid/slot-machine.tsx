
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slot-machine` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slot-machine?s=sharp-duotone-solid slot-machine}
 * @preview ![slot-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/slot-machine.svg)
 */
const SlotMachine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416l64 0 384 0 64 0 0-320L0 96zm56 80l24 0 72 0 24 0 0 24 0 8 0 5.3-2.2 4.8L119.4 336l-52.9 0 3.7-8.1 48-103.9L80 224l-24 0 0-48zm144 0l24 0 72 0 24 0 0 24 0 8 0 5.3-2.2 4.8L263.4 336l-52.9 0 3.7-8.1 48-103.9L224 224l-24 0 0-48zm144 0l24 0 72 0 24 0 0 24 0 8 0 5.3-2.2 4.8L407.4 336l-52.9 0 3.7-8.1 48-103.9L368 224l-24 0 0-48z" />
        <path d="M448 0l0 64L64 64 64 0 448 0zM640 176c0 14.2-6.2 27-16 35.8L624 480l0 32-32 0-144 0-32 0L64 512l0-96 384 0 0 32 112 0 0-236.2c-9.8-8.8-16-21.6-16-35.8c0-26.5 21.5-48 48-48s48 21.5 48 48z" />
    </Icon>
);

export default SlotMachine;