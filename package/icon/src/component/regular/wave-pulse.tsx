
import { Icon } from "../../index";

/**
 * A component that renders the `wave-pulse` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-pulse?s=regular wave-pulse}
 * @preview ![wave-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/wave-pulse.svg)
 */
const WavePulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M319.4 0c11.1-.3 21 7.1 23.8 17.9l79.3 303.9 27.1-57.7c9.2-19.6 29-32.2 50.7-32.2L616 232c13.3 0 24 10.7 24 24s-10.7 24-24 24l-115.7 0c-3.1 0-5.9 1.8-7.2 4.6L437.7 402.2c-4.3 9.1-13.9 14.6-23.9 13.7s-18.5-8.1-21-17.8L322.7 129.4 247.5 492.9c-2.2 10.9-11.6 18.8-22.7 19.1s-21-6.9-23.9-17.6L143.3 285.9c-1-3.5-4.1-5.9-7.7-5.9L24 280c-13.3 0-24-10.7-24-24s10.7-24 24-24l111.6 0c25.2 0 47.3 16.8 54 41.1l31 112.6L296.5 19.1C298.8 8.2 308.2 .3 319.4 0z" />
    </Icon>
);

export default WavePulse;