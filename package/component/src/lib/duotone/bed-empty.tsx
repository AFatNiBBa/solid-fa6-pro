
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-empty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-empty?s=duotone bed-empty}
 * @preview ![bed-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bed-empty.svg)
 */
const BedEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 224l32 0 448 0c24.3 0 46.6 9.1 63.5 24l.5 0 0 .4c19.6 17.6 32 43.1 32 71.6l-32 0L64 320l0-64 0-32z" />
        <path d="M32 32c17.7 0 32 14.3 32 32l0 256 544 0 32 0 0 32 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32L64 416l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64C0 46.3 14.3 32 32 32z" />
    </Icon>
);

export default BedEmpty;