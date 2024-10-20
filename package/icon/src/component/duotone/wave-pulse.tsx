
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wave-pulse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-pulse?s=duotone wave-pulse}
 * @preview ![wave-pulse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wave-pulse.svg)
 */
const WavePulse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M319.1 0c14.8-.4 27.9 9.3 31.8 23.6l74 271.2 17.7-35.4c10.8-21.7 33-35.4 57.2-35.4L608 224c17.7 0 32 14.3 32 32s-14.3 32-32 32l-108.2 0L444.6 398.3c-5.9 11.9-18.6 18.8-31.8 17.5s-24.2-10.6-27.7-23.4L323.7 167.3 255.3 486.7c-3.1 14.4-15.5 24.8-30.2 25.3s-27.8-9.1-31.8-23.2L135.9 288 32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l103.9 0c28.6 0 53.7 18.9 61.5 46.4L219.6 348 288.7 25.3C291.8 10.9 304.4 .4 319.1 0z" />
    </Icon>
);

export default WavePulse;