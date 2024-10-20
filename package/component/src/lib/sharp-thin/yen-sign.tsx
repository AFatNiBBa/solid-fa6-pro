
import { Icon } from "../../index";

/**
 * A component that renders the `yen-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/yen-sign?s=sharp-thin yen-sign}
 * @preview ![yen-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/yen-sign.svg)
 */
const YenSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M-1 32L144.6 240 40 240l-8 0 0 16 8 0 112 0 0 80L40 336l-8 0 0 16 8 0 112 0 0 120 0 8 16 0 0-8 0-120 112 0 8 0 0-16-8 0-112 0 0-80 112 0 8 0 0-16-8 0-104.6 0L321 32l-19.5 0L160 234 18.6 32-1 32z" />
    </Icon>
);

export default YenSign;