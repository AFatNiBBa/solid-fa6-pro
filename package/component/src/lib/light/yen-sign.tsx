
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=light yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M29 38.7C23.8 31.5 13.8 29.9 6.7 35S-2.1 50.2 3 57.4L123 224l-75 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 64-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 112c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112 96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-64 96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-75 0L317 57.4c5.2-7.2 3.5-17.2-3.6-22.3s-17.2-3.5-22.3 3.6l-131 182L29 38.7z" />
    </Icon>
);

export default YenSign;