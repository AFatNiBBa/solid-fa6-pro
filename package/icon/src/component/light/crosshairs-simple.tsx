
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=light crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M479.4 240L384 240c-8.8 0-16 7.2-16 16s7.2 16 16 16l95.4 0C471.6 383 383 471.6 272 479.4l0-95.4c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 95.4C129 471.6 40.4 383 32.6 272l95.4 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-95.4 0C40.4 129 129 40.4 240 32.6l0 95.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-95.4C383 40.4 471.6 129 479.4 240zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" />
    </Icon>
);

export default CrosshairsSimple;