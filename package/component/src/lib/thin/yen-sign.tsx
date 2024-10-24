
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=thin yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M14.5 35.3c-2.6-3.6-7.6-4.3-11.2-1.7s-4.3 7.6-1.7 11.2L144.2 240 40 240c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0 0 80L40 336c-4.4 0-8 3.6-8 8s3.6 8 8 8l112 0 0 120c0 4.4 3.6 8 8 8s8-3.6 8-8l0-120 112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-112 0 0-80 112 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-104.2 0L318.5 44.7c2.6-3.6 1.8-8.6-1.7-11.2s-8.6-1.8-11.2 1.7L160 234.4 14.5 35.3z" />
    </Icon>
);

export default YenSign;