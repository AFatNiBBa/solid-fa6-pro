
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-line` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-line?s=solid arrow-down-to-line}
 * @preview ![arrow-down-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrow-down-to-line.svg)
 */
const ArrowDownToLine: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 480zM214.6 342.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 242.7 160 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 178.7 73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128z" />
    </Icon>
);

export default ArrowDownToLine;