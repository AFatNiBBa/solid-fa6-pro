
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=sharp-light underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 32l16 0 128 0 16 0 0 32-16 0L96 64l0 160c0 70.7 57.3 128 128 128s128-57.3 128-128l0-160-48 0-16 0 0-32 16 0 128 0 16 0 0 32-16 0-48 0 0 160c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 64 16 64 0 64 0 32zM0 448l16 0 416 0 16 0 0 32-16 0L16 480 0 480l0-32z" />
    </Icon>
);

export default Underline;