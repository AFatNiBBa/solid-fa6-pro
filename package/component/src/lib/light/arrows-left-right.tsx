
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=light arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M507.3 271.3c6.1-6.1 6.3-15.9 .4-22.2l-96-104c-6-6.5-16.1-6.9-22.6-.9s-6.9 16.1-.9 22.6L459.5 244 54.6 244l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 276l402.7 0-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l96-96z" />
    </Icon>
);

export default ArrowsLeftRight;