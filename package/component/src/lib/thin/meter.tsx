
import { Icon } from "../../index";

/**
 * A component that renders the `meter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meter?s=thin meter}
 * @preview ![meter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/meter.svg)
 */
const Meter: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176-96c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32zm144 32l0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16zm-16-64c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32zm112 32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-32z" />
    </Icon>
);

export default Meter;