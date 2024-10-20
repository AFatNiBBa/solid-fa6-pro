
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-from-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=sharp-duotone-solid arrow-up-from-square}
 * @preview ![arrow-up-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-up-from-square.svg)
 */
const ArrowUpFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 64 0 0 64L64 96l0 352 384 0 0-352-32 0 0-64 64 0 32 0 0 32 0 416 0 32-32 0L32 512 0 512l0-32L0 64 0 32z" />
        <path d="M256 2.7l22.6 22.6 96 96L397.3 144 352 189.3l-22.6-22.6L288 125.3 288 320l0 32-64 0 0-32 0-194.7-41.4 41.4L160 189.3 114.7 144l22.6-22.6 96-96L256 2.7z" />
    </Icon>
);

export default ArrowUpFromSquare;