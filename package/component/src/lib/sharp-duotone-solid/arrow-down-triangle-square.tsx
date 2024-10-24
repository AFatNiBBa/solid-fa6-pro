
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-triangle-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-triangle-square?s=sharp-duotone-solid arrow-down-triangle-square}
 * @preview ![arrow-down-triangle-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-triangle-square.svg)
 */
const ArrowDownTriangleSquare: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M304 224L416 32 528 224l-224 0zm16 64l192 0 0 192-192 0 0-192z" />
        <path d="M160 480l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L192 349.7l0-285.2 0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 299.2 34.8 342.3 56.3 366l80 88L160 480z" />
    </Icon>
);

export default ArrowDownTriangleSquare;