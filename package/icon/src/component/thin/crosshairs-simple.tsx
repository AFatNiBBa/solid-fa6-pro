
import { Icon } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=thin crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.9 248L392 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l103.9 0C491.7 390.2 390.2 491.7 264 495.9L264 392c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 103.9C121.8 491.7 20.3 390.2 16.1 264L120 264c4.4 0 8-3.6 8-8s-3.6-8-8-8L16.1 248C20.3 121.8 121.8 20.3 248 16.1L248 120c0 4.4 3.6 8 8 8s8-3.6 8-8l0-103.9C390.2 20.3 491.7 121.8 495.9 248zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256z" />
    </Icon>
);

export default CrosshairsSimple;