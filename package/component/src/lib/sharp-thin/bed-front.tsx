
import { Icon } from "../../index";

/**
 * A component that renders the `bed-front` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-front?s=sharp-thin bed-front}
 * @preview ![bed-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bed-front.svg)
 */
const BedFront: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 32l-8 0 0 8 0 88 0 8 0 88L8 224l-8 0 0 8L0 408l0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 480 0 0 56 0 8 16 0 0-8 0-64 0-176 0-8-8 0-24 0 0-88 0-8 0-88 0-8-8 0L40 32zm8 112l200 0 0 80L48 224l0-80zm200-16L48 128l0-80 416 0 0 80-200 0-8 0-8 0zm16 16l200 0 0 80-200 0 0-80zm0 96l200 0 16 0 16 0 0 160L16 400l0-160 16 0 16 0 200 0 16 0z" />
    </Icon>
);

export default BedFront;