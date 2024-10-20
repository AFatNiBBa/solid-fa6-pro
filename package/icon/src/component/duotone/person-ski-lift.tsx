
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-ski-lift` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-ski-lift?s=duotone person-ski-lift}
 * @preview ![person-ski-lift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-ski-lift.svg)
 */
const PersonSkiLift: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.3 210.4l65 135.8c18.3 38.4 61.5 58.1 102.5 46.9l36.5-9.9c12.8-3.5 20.3-16.7 16.8-29.5s-16.7-20.3-29.5-16.8l-36.5 9.9c-18.7 5.1-38.3-3.9-46.6-21.3l-65-135.8c-5.7-12-20-17-32-11.3s-17 20-11.3 32zm95.1 286C101.1 506 110.2 512 120 512c2.8 0 5.6-.5 8.3-1.5L459.7 388c31.4-11.6 52.3-41.6 52.3-75l0-1c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 1c0 13.4-8.3 25.4-20.9 30c-41 15.2-82.1 30.3-123.1 45.5c-21.3 7.9-42.7 15.8-64 23.7L111.7 465.5c-12.4 4.6-18.8 18.4-14.2 30.8zM224 16l0 190.8 32-8.5L256 16c0-8.8-7.2-16-16-16s-16 7.2-16 16z" />
        <path d="M64 80a48 48 0 1 1 96 0A48 48 0 1 1 64 80zm36.4 138c-14.2-30.8 8.3-66 42.2-66c18.2 0 34.8 10.7 42.3 27.3l28.8 63.4 55.9-14.9c25.4-6.8 50.3 12.4 50.3 38.6l0 122.1-64 23.7 0-114.5-66.7 17.8c-22.6 6-46.2-5.1-55.9-26.3L100.4 218z" />
    </Icon>
);

export default PersonSkiLift;