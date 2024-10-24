
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=sharp-regular palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256l0 16-108.1 0c-64 0-115.9 51.9-115.9 115.9c0 20.2 5.3 39.9 15.1 57.2L237 463.1C131 453.5 48 364.5 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208zM320 448l-12.1-12.1c-12.7-12.7-19.9-30-19.9-48c0-37.5 30.4-67.9 67.9-67.9L464 320l48 0 0-48 0-16C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512l30.1-30.1L320 448zM256 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-64 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-32 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm224-96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Palette;