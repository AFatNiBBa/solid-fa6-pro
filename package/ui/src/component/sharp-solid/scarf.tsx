
import { Icon } from "../../index";

/**
 * A component that renders the `scarf` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scarf?s=sharp-solid scarf}
 * @preview ![scarf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/scarf.svg)
 */
const Scarf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184 0l-8.7 0-4.7 7.3-72 112-2.5 4 0 4.7 0 80 0 6.6 4.7 4.7 176 176 112 112 22.6-22.6L310.6 384 336 358.6 436.7 459.3l22.6-22.6L358.6 336 384 310.6 484.7 411.3l22.6-22.6-112-112L384 265.4l-9.4-9.4L256 137.4 214.6 96 256 96l41.4 0-18.7 18.7L397.3 233.4l14.1-14.1 4.7-4.7 0-6.6 0-80 0-4.7-2.5-4-72-112L336.7 0 328 0 184 0zM4.7 388.7l22.6 22.6 112-112-22.6-22.6-112 112zm48 48l22.6 22.6 112-112-22.6-22.6-112 112zm48 48l22.6 22.6 112-112-22.6-22.6-112 112z" />
    </Icon>
);

export default Scarf;