
import { Icon } from "../../index";

/**
 * A component that renders the `square-chevron-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-chevron-down?s=thin square-chevron-down}
 * @preview ![square-chevron-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-chevron-down.svg)
 */
const SquareChevronDown: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 464c-26.5 0-48-21.5-48-48L16 96c0-26.5 21.5-48 48-48l320 0c26.5 0 48 21.5 48 48l0 320c0 26.5-21.5 48-48 48L64 464zM0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416zm229.7-74.3l120-120c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 324.7 109.7 210.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0z" />
    </Icon>
);

export default SquareChevronDown;