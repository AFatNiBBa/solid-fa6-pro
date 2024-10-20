
import { Icon } from "../../index";

/**
 * A component that renders the `shelves-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shelves-empty?s=thin shelves-empty}
 * @preview ![shelves-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shelves-empty.svg)
 */
const ShelvesEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 8c0-4.4-3.6-8-8-8S0 3.6 0 8L0 184 0 440l0 64c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 608 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-64 0-256L640 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 168L16 176 16 8zm0 184l608 0 0 240L16 432l0-240z" />
    </Icon>
);

export default ShelvesEmpty;