
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-front` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-front?s=duotone truck-front}
 * @preview ![truck-front](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-front.svg)
 */
const TruckFront: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M32 432c6.7 5 14.2 9 22.3 11.8c4 1.4 8.2 2.4 12.5 3.1c2.1 .4 4.3 .6 6.5 .8c1.1 .1 2.2 .2 3.3 .2s2.2 .1 3.4 .1l48 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-48zm80-208l17.9-71.8c3.6-14.2 16.4-24.2 31-24.2l190 0c14.7 0 27.5 10 31 24.2L400 224l-288 0zM384 448l48 0c18 0 34.6-6 48-16l0 48c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32z" />
        <path d="M80 0C35.8 0 0 35.8 0 80L0 368c0 44.2 35.8 80 80 80l352 0c44.2 0 80-35.8 80-80l0-288c0-44.2-35.8-80-80-80L80 0zm32 224l17.9-71.8c3.6-14.2 16.4-24.2 31-24.2l190 0c14.7 0 27.5 10 31 24.2L400 224l-288 0zM64 320a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm352-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default TruckFront;