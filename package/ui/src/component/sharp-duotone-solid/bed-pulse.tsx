
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bed-pulse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-pulse?s=sharp-duotone-solid bed-pulse}
 * @preview ![bed-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bed-pulse.svg)
 */
const BedPulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 240a80 80 0 1 0 160 0A80 80 0 1 0 96 240zm192-80l0 32 0 128 0 32 32 0 288 0 32 0 0-32 0-64c0-53-43-96-96-96l-74.1 0-11.2 23.8L443.5 216 408 216l-16 0-36.4 0-14.8-33.3L330.7 160 320 160l-32 0z" />
        <path d="M472 0L456.8 0l-6.5 13.8-49.9 106L381.9 78.3 375.6 64 360 64 216 64l-24 0 0 48 24 0 128.4 0 25.7 57.7 6.3 14.3 15.6 0 16 0 15.2 0 6.5-13.8L480.4 62.5l18.1 36.2 6.6 13.3 14.8 0 96 0 24 0 0-48-24 0-81.2 0L509.5 13.3 502.8 0 488 0 472 0zM64 96l0-32L0 64 0 96 0 352l0 64 0 64 0 32 64 0 0-32 0-32 512 0 0 32 0 32 64 0 0-32 0-96 0-32-32 0L64 352 64 96z" />
    </Icon>
);

export default BedPulse;