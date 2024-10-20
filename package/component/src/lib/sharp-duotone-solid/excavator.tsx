
import { Icon, generic } from "../../index";

/**
 * A component that renders the `excavator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/excavator?s=sharp-duotone-solid excavator}
 * @preview ![excavator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/excavator.svg)
 */
const Excavator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 432c0-44.2 35.8-80 80-80l256 0c44.2 0 80 35.8 80 80s-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80zm64 0c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L80 416c-8.8 0-16 7.2-16 16zM416 160L576 0l64 0 0 320 0 64 0 48c0 44.2-35.8 80-80 80l-112 0 0-48L576 336l0-208L416 288l0-128z" />
        <path d="M128 0L96 0l0 32 0 128L0 160 0 320l384 0 0-96 0-56 0-8 0-2.2-5.9-8.3-96-136L272.6 0 256 0 128 0zM307.2 160L160 160l0-96 79.4 0 67.8 96z" />
    </Icon>
);

export default Excavator;