
import { Icon } from "../../index";

/**
 * A component that renders the `font-awesome` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font-awesome?s=sharp-thin font-awesome}
 * @preview ![font-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/font-awesome.svg)
 */
const FontAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M102.8 56A38.8 38.8 0 1 0 25.2 56a38.8 38.8 0 1 0 77.5 0zM64 112s0 0 0 0s0 0 0 0l-16 0 0 320 432 0 0-12.6L417.4 278.5l-2.9-6.5 2.9-6.5L480 124.6l0-12.6L64 112zM32 102C17.5 91.8 8 75 8 56C8 25.1 33.1 0 64 0s56 25.1 56 56c0 15.7-6.4 29.8-16.8 40L480 96l16 0 0 16 0 16L432 272l64 144 0 16 0 16-16 0L48 448l0 64-16 0 0-64 0-16 0-320 0-10z" />
    </Icon>
);

export default FontAwesome;