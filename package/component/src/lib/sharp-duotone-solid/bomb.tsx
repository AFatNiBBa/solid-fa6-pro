
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bomb` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bomb?s=sharp-duotone-solid bomb}
 * @preview ![bomb](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bomb.svg)
 */
const Bomb: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M352 80l53.3 26.7L432 160l26.7-53.3L512 80 458.7 53.3 432 0 405.3 53.3 352 80z" />
        <path d="M304 82.7l22.6 22.6 80 80L429.3 208l-22.6 22.6-2.9 2.9c7.9 22 12.2 45.7 12.2 70.5c0 114.9-93.1 208-208 208S0 418.9 0 304S93.1 96 208 96c24.7 0 48.5 4.3 70.5 12.3l2.9-2.9L304 82.7zM96 296c0-57.4 46.6-104 104-104l8 0 0-32-8 0c-75.1 0-136 60.9-136 136l0 8 32 0 0-8z" />
    </Icon>
);

export default Bomb;