
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-down-big-small` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-big-small?s=sharp-duotone-solid arrow-down-big-small}
 * @preview ![arrow-down-big-small](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/arrow-down-big-small.svg)
 */
const ArrowDownBigSmall: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M320 32l0 224 224 0 0-224L320 32zm0 288l0 160 160 0 0-160-160 0z" />
        <path d="M160 480l23.7-26 80-88 21.5-23.7-47.4-43.1-21.5 23.7L192 349.7l0-285.2 0-32-64 0 0 32 0 285.2-24.3-26.8L82.2 299.2 34.8 342.3 56.3 366l80 88L160 480z" />
    </Icon>
);

export default ArrowDownBigSmall;