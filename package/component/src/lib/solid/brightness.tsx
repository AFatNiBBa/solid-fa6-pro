
import { Icon } from "../../index";

/**
 * A component that renders the `brightness` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/brightness?s=solid brightness}
 * @preview ![brightness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/brightness.svg)
 */
const Brightness: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 80l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 17.7-14.3 32-32 32s-32-14.3-32-32zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM0 256c0-17.7 14.3-32 32-32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32zm432-32l48 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-48 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zM256 512c-17.7 0-32-14.3-32-32l0-48c0-17.7 14.3-32 32-32s32 14.3 32 32l0 48c0 17.7-14.3 32-32 32zM73.4 438.6c-12.5-12.5-12.5-32.8 0-45.3l32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32c-12.5 12.5-32.8 12.5-45.3 0zm288-333.3l32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3zm77.3 333.3c-12.5 12.5-32.8 12.5-45.3 0l-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32c12.5 12.5 12.5 32.8 0 45.3zm-333.3-288l-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0z" />
    </Icon>
);

export default Brightness;