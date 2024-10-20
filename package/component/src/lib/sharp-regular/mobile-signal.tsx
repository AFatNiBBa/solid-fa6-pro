
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=sharp-regular mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 48l256 0 0 264.8c14.5-15.1 30.6-28.6 48-40.3L352 48l0-48L304 0 48 0 0 0 0 48 0 464l0 48 48 0 176 0c0-16.4 1.4-32.4 4-48L48 464 48 48zm96 352l-16 0 0 32 16 0 64 0 16 0 0-32-16 0-64 0zm368-96l0-48c-141.4 0-256 114.6-256 256l48 0c0-114.9 93.1-208 208-208zM480 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm-80 0c0-61.9 50.1-112 112-112l0-48c-88.4 0-160 71.6-160 160l48 0z" />
    </Icon>
);

export default MobileSignal;