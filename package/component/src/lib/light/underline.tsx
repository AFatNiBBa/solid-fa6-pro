
import { Icon } from "../../index";

/**
 * A component that renders the `underline` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/underline?s=light underline}
 * @preview ![underline](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/underline.svg)
 */
const Underline: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L96 64l0 160c0 70.7 57.3 128 128 128s128-57.3 128-128l0-160-48 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l128 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0 0 160c0 88.4-71.6 160-160 160s-160-71.6-160-160L64 64 16 64C7.2 64 0 56.8 0 48zM0 464c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 480c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Underline;