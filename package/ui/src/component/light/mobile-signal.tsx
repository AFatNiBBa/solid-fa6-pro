
import { Icon } from "../../index";

/**
 * A component that renders the `mobile-signal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mobile-signal?s=light mobile-signal}
 * @preview ![mobile-signal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mobile-signal.svg)
 */
const MobileSignal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32l192 0c17.7 0 32 14.3 32 32l0 220.3c10.1-8.3 20.8-15.9 32-22.7L352 64c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 384c0 35.3 28.7 64 64 64l128 0 0-24c0-2.7 0-5.3 .1-8L96 480c-17.7 0-32-14.3-32-32L64 64c0-17.7 14.3-32 32-32zM224 400l-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l64 0c2.2 0 4.3-.4 6.2-1.3c1.8-8.2 4-16.4 6.6-24.3c-2.9-3.9-7.6-6.4-12.8-6.4zM496 256c-132.5 0-240 107.5-240 240c0 8.8 7.2 16 16 16s16-7.2 16-16c0-114.9 93.1-208 208-208c8.8 0 16-7.2 16-16s-7.2-16-16-16zM480 512a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm32-144c0-8.8-7.2-16-16-16c-79.5 0-144 64.5-144 144c0 8.8 7.2 16 16 16s16-7.2 16-16c0-61.9 50.1-112 112-112c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default MobileSignal;