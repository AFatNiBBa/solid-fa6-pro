
import { Icon } from "../../index";

/**
 * A component that renders the `glass-empty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass-empty?s=thin glass-empty}
 * @preview ![glass-empty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/glass-empty.svg)
 */
const GlassEmpty: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32.1 16c-9.3 0-16.7 8-15.9 17.3L50.9 459.2C52.6 480 69.9 496 90.7 496l202.6 0c20.8 0 38.2-16 39.9-36.8L367.9 33.3C368.7 24 361.3 16 352 16L32.1 16zM.2 34.6C-1.3 16 13.4 0 32.1 0L352 0c18.7 0 33.4 16 31.9 34.6l-34.7 426c-2.4 29.1-26.7 51.4-55.8 51.4L90.7 512c-29.2 0-53.4-22.4-55.8-51.4L.2 34.6z" />
    </Icon>
);

export default GlassEmpty;