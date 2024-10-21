
import { Icon } from "../../index";

/**
 * A component that renders the `receipt` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/receipt?s=sharp-light receipt}
 * @preview ![receipt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/receipt.svg)
 */
const Receipt: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M87.9 452.2l-14.1-8L59 450.8l-27 12L32 49.2l27 12 14.8 6.6 14.1-8L129 36.3l48.7 24.3L192 67.8l14.3-7.2L255 36.3l41.1 23.5 14.1 8L325 61.2l27-12 0 413.5-27-12-14.8-6.6-14.1 8L255 475.7l-48.7-24.3L192 444.2l-14.3 7.2L129 475.7 87.9 452.2zM0 512l32-14.2L72 480l56 32 64-32 64 32 56-32 40 17.8L384 512l0-35 0-442 0-35L352 14.2 312 32 256 0 192 32 128 0 72 32 32 14.2 0 0 0 35 0 477l0 35zM96 144l-16 0 0 32 16 0 192 0 16 0 0-32-16 0L96 144zM80 336l0 32 16 0 192 0 16 0 0-32-16 0L96 336l-16 0zm16-96l-16 0 0 32 16 0 192 0 16 0 0-32-16 0L96 240z" />
    </Icon>
);

export default Receipt;