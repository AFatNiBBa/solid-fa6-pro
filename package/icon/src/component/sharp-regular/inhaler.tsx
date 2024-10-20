
import { Icon } from "../../index";

/**
 * A component that renders the `inhaler` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inhaler?s=sharp-regular inhaler}
 * @preview ![inhaler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/inhaler.svg)
 */
const Inhaler: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M576 72L528.7 243.4 395.2 110 416 32 576 72zM374.1 272l-36.8 0L240 272l0 160 209.9 0 33-121.2-94-94-5.3 19.6L374.1 272zm29.2-108.6L536.6 296.6 486.6 480 240 480l-48 0 0-48 0-160 0-48 48 0 97.3 0 12.5-46.3 14.4-53.5 39.2 39.2zM0 256a32 32 0 1 1 64 0A32 32 0 1 1 0 256zm0 96a32 32 0 1 1 64 0A32 32 0 1 1 0 352zm128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM0 448a32 32 0 1 1 64 0A32 32 0 1 1 0 448zm128-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Inhaler;