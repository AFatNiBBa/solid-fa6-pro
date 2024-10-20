
import { Icon } from "../../index";

/**
 * A component that renders the `skeleton` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skeleton?s=sharp-thin skeleton}
 * @preview ![skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/skeleton.svg)
 */
const Skeleton: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 0l0 8 0 72 152 0 8 0 0 16-8 0L264 96l0 80 216 0 8 0 0 16-8 0-216 0 0 80 120 0 8 0 0 16-8 0-120 0 0 77.7L368 336l64 0 16 0 0 16 0 88-64 72-256 0L64 440l0-88 0-16 16 0 64 0 104 29.7 0-77.7-120 0-8 0 0-16 8 0 120 0 0-80L32 192l-8 0 0-16 8 0 216 0 0-80L96 96l-8 0 0-16 8 0 152 0 0-72 0-8 16 0zM370.2 352L260.4 383.4l-4.4 1.3-4.4-1.3L141.8 352 80 352l0 81.9L135.2 496l241.6 0L432 433.9l0-81.9-61.8 0zM168 432a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm136-32a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z" />
    </Icon>
);

export default Skeleton;