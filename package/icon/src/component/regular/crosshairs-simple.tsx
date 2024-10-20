
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=regular crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M462.6 232L392 232c-13.3 0-24 10.7-24 24s10.7 24 24 24l70.6 0c-11 95.7-86.9 171.6-182.6 182.6l0-70.6c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 70.6C136.3 451.6 60.4 375.7 49.4 280l70.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-70.6 0C60.4 136.3 136.3 60.4 232 49.4l0 70.6c0 13.3 10.7 24 24 24s24-10.7 24-24l0-70.6c95.7 11 171.6 86.9 182.6 182.6zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" />
    </Icon>
);

export default CrosshairsSimple;