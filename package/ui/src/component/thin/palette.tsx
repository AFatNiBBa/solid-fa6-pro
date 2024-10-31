
import { Icon } from "../../index";

/**
 * A component that renders the `palette` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/palette?s=thin palette}
 * @preview ![palette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/palette.svg)
 */
const Palette: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 258.5c-.3 25.3-23.7 45.5-54.1 45.5L344 304c-35.3 0-64 28.7-64 64c0 4.5 .5 9 1.4 13.2c2.5 12 7.7 23.6 12 33.4c0 0 0 0 0 0c.8 1.8 1.6 3.6 2.3 5.3c5.1 11.7 8.2 20.9 8.2 29.8c0 25.5-16.9 45.1-38.1 46c-3.3 .1-6.6 .2-9.9 .2C123.5 496 16 388.5 16 256S123.5 16 256 16s240 107.5 240 240c0 .8 0 1.7 0 2.5zm16 .2c0-.9 0-1.8 0-2.7C512 114.6 397.4 0 256 0S0 114.6 0 256S114.6 512 256 512c3.5 0 7.1-.1 10.6-.2c31.8-1.3 53.4-30.1 53.4-62c0-14.5-6.1-28.3-12.1-42c-4.3-9.8-8.7-19.7-10.8-29.9c-.7-3.2-1-6.5-1-9.9c0-26.5 21.5-48 48-48l97.9 0c36.5 0 69.7-24.8 70.1-61.3zM104 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm8-168a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm64 0a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm88-88a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm0 64a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm104 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm64 0a40 40 0 1 0 -80 0 40 40 0 1 0 80 0z" />
    </Icon>
);

export default Palette;