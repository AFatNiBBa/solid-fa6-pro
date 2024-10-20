
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=solid arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M9.4 9.4C21.9-3.1 42.1-3.1 54.6 9.4L160 114.7 160 64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 128c0 17.7-14.3 32-32 32L64 224c-17.7 0-32-14.3-32-32s14.3-32 32-32l50.7 0L9.4 54.6C-3.1 42.1-3.1 21.9 9.4 9.4zm448 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3L397.3 160l50.7 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32s32 14.3 32 32l0 50.7L457.4 9.4zM32 320c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7L54.6 502.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L114.7 352 64 352c-17.7 0-32-14.3-32-32zm256 0c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-50.7 0L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L352 397.3l0 50.7c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128z" />
    </Icon>
);

export default ArrowsMinimize;