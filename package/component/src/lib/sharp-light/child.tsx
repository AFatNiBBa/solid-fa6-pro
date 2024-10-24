
import { Icon } from "../../index";

/**
 * A component that renders the `child` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child?s=sharp-light child}
 * @preview ![child](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/child.svg)
 */
const Child: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM94.5 160l-9 0-4.7 7.6L2.4 295.6l27.3 16.7L80 230.2 80 496l0 16 32 0 0-16 0-112 96 0 0 112 0 16 32 0 0-16 0-265.8 50.4 82.1 27.3-16.7-78.5-128-4.7-7.6-9 0-131 0zM208 352l-96 0 0-152 0-8 96 0 0 8 0 152z" />
    </Icon>
);

export default Child;