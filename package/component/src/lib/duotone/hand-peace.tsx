
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-peace` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-peace?s=duotone hand-peace}
 * @preview ![hand-peace](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-peace.svg)
 */
const HandPeace: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M34.7 76.8L106.1 240l69.9 0L93.3 51.2C86.2 35 67.4 27.6 51.2 34.7S27.6 60.6 34.7 76.8zM64 336l0 27c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l0-8.6c-9.4 5.4-20.3 8.6-32 8.6c-27.9 0-51.7-17.9-60.4-42.8C345.4 316 333.2 320 320 320c-11.7 0-22.6-3.1-32-8.6l0 .6c0 39.8-32.2 72-72 72l-56 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l56 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-26.1 0-69.9 0 .2 .5C88.6 276.3 64 303.3 64 336zM192 32l0 208 64 0 0-208c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M320 160c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32zm96 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default HandPeace;