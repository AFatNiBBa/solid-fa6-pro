
import { Icon } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=sharp-thin phone-missed}
 * @preview ![phone-missed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-missed.svg)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M104 0L248 0l8 0 0 16-8 0L123.3 16l168 168 57.4 0L506.3 26.3l5.7-5.7L523.3 32l-5.7 5.7-160 160-2.3 2.3-3.3 0-64 0-3.3 0-2.3-2.3L112 27.3 112 152l0 8-16 0 0-8L96 8l0-8 8 0zM416 464l0-80c-62.3-20.8-129.7-20.8-192 0l0 80L64 512 0 384c37.3-48 153.6-144 320-144s282.7 96 320 144L576 512 416 464zM208 384l0-11.5 10.9-3.6c65.6-21.9 136.5-21.9 202.1 0l10.9 3.6 0 11.5 0 68.1 135.7 40.7L621 386.1C580.1 339 471.7 256 320 256S59.9 339 19 386.1L72.3 492.8 208 452.1l0-68.1z" />
    </Icon>
);

export default PhoneMissed;