
import { Icon } from "../../index";

/**
 * A component that renders the `gg-circle` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gg-circle?s=brands gg-circle}
 * @preview ![gg-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/gg-circle.svg)
 */
const GgCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M257 8C120 8 9 119 9 256s111 248 248 248 248-111 248-248S394 8 257 8zm-49.5 374.8L81.8 257.1l125.7-125.7 35.2 35.4-24.2 24.2-11.1-11.1-77.2 77.2 77.2 77.2 26.6-26.6-53.1-52.9 24.4-24.4 77.2 77.2-75 75.2zm99-2.2l-35.2-35.2 24.1-24.4 11.1 11.1 77.2-77.2-77.2-77.2-26.5 26.5 53.1 52.9-24.4 24.4-77.2-77.2 75-75L432.2 255 306.5 380.6z" />
    </Icon>
);

export default GgCircle;