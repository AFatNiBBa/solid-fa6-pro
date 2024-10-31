
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-fingers-crossed` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-fingers-crossed?s=duotone hand-fingers-crossed}
 * @preview ![hand-fingers-crossed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-fingers-crossed.svg)
 */
const HandFingersCrossed: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 336l0 27c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l0-8.6c-9.4 5.4-20.3 8.6-32 8.6c-27.9 0-51.7-17.9-60.4-42.8C281.4 316 269.2 320 256 320c-11.7 0-22.6-3.1-32-8.6c0 .2 0 .4 0 .6c0 39.8-32.2 72-72 72l-56 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l56 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-1.4 0c-11.8 0-23.5 0-35.3 0s-23.5 0-35.3 0c-5.3 0-10.7 0-16 0c-35.3 0-64 28.7-64 64zM35 45.5l40 85.8 35.3-75.7L93 18.5C87.6 6.8 76 0 64 0c-4.5 0-9.1 1-13.5 3C34.5 10.5 27.5 29.5 35 45.5zM59.6 240l70.6 0L221 45.5c7.5-16 .5-35.1-15.5-42.5s-35.1-.5-42.5 15.5L59.6 240zM165 241.2c9.8 1.8 19 5.6 27 11l0-21.5L181 207l-16 34.2z" />
        <path d="M256 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32zm96 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default HandFingersCrossed;