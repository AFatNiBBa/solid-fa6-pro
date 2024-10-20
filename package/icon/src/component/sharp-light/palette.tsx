
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=sharp-light palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 288l0-32C480 132.3 379.7 32 256 32S32 132.3 32 256c0 119.4 93.4 217 211.1 223.6l32.4-32.4c-12.6-17.1-19.5-37.8-19.5-59.3c0-55.2 44.7-99.9 99.9-99.9L480 288zM307.9 435.9L320 448l-22.6 22.6L256 512C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256l0 32 0 32-32 0-124.1 0c-37.5 0-67.9 30.4-67.9 67.9c0 18 7.2 35.3 19.9 48zM104 256a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm56-120a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm72-8a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm120 8a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Palette;