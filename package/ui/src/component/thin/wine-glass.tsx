
import { Icon } from "../../index";

/**
 * A component that renders the `wine-glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wine-glass?s=thin wine-glass}
 * @preview ![wine-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wine-glass.svg)
 */
const WineGlass: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M44.5 144l231 0 7 51.6C292.7 269.9 234.9 336 160 336S27.3 269.9 37.5 195.6l7-51.6zm2.2-16L60.1 29.8C61.2 21.9 67.9 16 75.9 16l168.1 0c8 0 14.8 5.9 15.9 13.8L273.3 128 46.7 128zM44.2 27.7L21.6 193.5C10.5 274.7 71.3 347.3 152 351.8L152 496l-80 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l88 0 88 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-80 0 0-144.2c80.7-4.5 141.5-77.1 130.4-158.3L275.8 27.7C273.6 11.8 260.1 0 244.1 0L75.9 0c-16 0-29.5 11.8-31.7 27.7z" />
    </Icon>
);

export default WineGlass;