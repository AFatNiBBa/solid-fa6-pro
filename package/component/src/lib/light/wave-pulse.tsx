
import { Icon } from "../../index";

/**
 * A component that renders the `wave-pulse` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-pulse?s=light wave-pulse}
 * @preview ![wave-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wave-pulse.svg)
 */
const WavePulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M319.6 0c7.5-.2 14.1 4.9 15.9 12.1l84 336 37.6-93.9c7.3-18.2 24.9-30.2 44.6-30.2L624 224c8.8 0 16 7.2 16 16s-7.2 16-16 16l-122.3 0c-6.5 0-12.4 4-14.9 10.1l-56 139.9c-2.6 6.4-9 10.5-15.9 10s-12.8-5.4-14.4-12.1l-78.7-315-82 410.2c-1.5 7.3-7.8 12.7-15.3 12.9s-14.1-4.9-15.9-12.1L150.5 268.1C148.8 261 142.4 256 135 256L16 256c-8.8 0-16-7.2-16-16s7.2-16 16-16l119 0c22 0 41.2 15 46.6 36.4l40.7 162.7 82-410.2C305.8 5.5 312.1 .2 319.6 0z" />
    </Icon>
);

export default WavePulse;