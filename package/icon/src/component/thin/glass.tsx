
import { Icon } from "../../index";

/**
 * A component that renders the `glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/glass?s=thin glass}
 * @preview ![glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/glass.svg)
 */
const Glass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16.1 33.3C15.4 24 22.7 16 32.1 16L352 16c9.4 0 16.7 8 15.9 17.3L361.5 112 22.6 112 16.1 33.3zM23.9 128l336.3 0-27 331.2c-1.7 20.8-19 36.8-39.9 36.8L90.7 496c-20.8 0-38.2-16-39.9-36.8L23.9 128zM32.1 0C13.4 0-1.3 16 .2 34.6l34.7 426C37.3 489.6 61.6 512 90.7 512l202.6 0c29.2 0 53.4-22.4 55.8-51.4l34.7-426C385.4 16 370.7 0 352 0L32.1 0z" />
    </Icon>
);

export default Glass;