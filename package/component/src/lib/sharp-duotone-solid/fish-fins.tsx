
import { Icon, generic } from "../../index";

/**
 * A component that renders the `fish-fins` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-fins?s=sharp-duotone-solid fish-fins}
 * @preview ![fish-fins](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/fish-fins.svg)
 */
const FishFins: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 160l48 96L0 352l32 32 114.9-57.5c22.6 24.4 52.8 50 90.6 67.6C266 407.4 298.8 416 336 416c3.1 0 6.3-.1 9.4-.2C499.1 409.8 576 256 576 256s-76.9-153.8-230.6-159.8c-3.1-.1-6.2-.2-9.4-.2c-37.2 0-70 8.6-98.5 21.9c-37.7 17.5-67.9 43.1-90.6 67.6L32 128 0 160zm448 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M237.5 394.1C266 407.4 298.8 416 336 416c3.1 0 6.3-.1 9.4-.2L272 480l-48-32 13.5-53.9zM345.4 96.2c-3.1-.1-6.2-.2-9.4-.2c-37.2 0-70 8.6-98.5 21.9L224 64l48-32 73.4 64.2z" />
    </Icon>
);

export default FishFins;