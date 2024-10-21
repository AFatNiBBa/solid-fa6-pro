
import { Icon } from "../../index";

/**
 * A component that renders the `phone-missed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-missed?s=sharp-light phone-missed}
 * @preview ![phone-missed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/phone-missed.svg)
 */
const PhoneMissed: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 0L240 0l16 0 0 32-16 0-89.4 0 112 112 114.7 0L500.7 20.7 512 9.4 534.6 32 523.3 43.3l-128 128-4.7 4.7-6.6 0-128 0-6.6 0-4.7-4.7L128 54.6l0 89.4 0 16-32 0 0-16L96 16 96 0l16 0zM416 464l0-96c-62.3-20.8-129.7-20.8-192 0l0 96L64 512 0 368c37.3-48 153.6-144 320-144s282.7 96 320 144L576 512 416 464zM192 368l0-23.1 21.9-7.3c68.9-23 143.4-23 212.2 0l21.9 7.3 0 23.1 0 72.2 110.2 33.1 44.3-99.7C559.7 328.3 458.7 256 320 256S80.3 328.3 37.5 373.5l44.3 99.7L192 440.2l0-72.2z" />
    </Icon>
);

export default PhoneMissed;