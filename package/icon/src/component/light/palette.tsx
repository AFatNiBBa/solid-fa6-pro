
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=light palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 258.3c-.1 14.1-13.8 29.7-38.1 29.7L344 288c-44.2 0-80 35.8-80 80c0 5.6 .6 11.2 1.7 16.6c2.9 13.8 8.9 27.3 13.2 37c.8 1.7 1.5 3.3 2.1 4.8c5 11.6 6.9 18.2 6.9 23.5c0 19.2-12.3 29.6-22.7 30c-3.1 .1-6.2 .2-9.3 .2C132.3 480 32 379.7 32 256S132.3 32 256 32s224 100.3 224 224c0 .8 0 1.6 0 2.3zm32 .3c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48l97.9 0c36.5 0 69.7-24.8 70.1-61.3zM152 256a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm8-72a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm120-56a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm72 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Palette;