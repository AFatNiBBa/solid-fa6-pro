
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-point-ribbon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-point-ribbon?s=duotone hand-point-ribbon}
 * @preview ![hand-point-ribbon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-point-ribbon.svg)
 */
const HandPointRibbon: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 336l0 27c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l0-8.6c-9.4 5.4-20.3 8.6-32 8.6c-27.9 0-51.7-17.9-60.4-42.8C313.4 316 301.2 320 288 320c-11.7 0-22.6-3.1-32-8.6l0 .6c0 39.8-32.2 72-72 72l-56 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l56 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-88 0c-35.3 0-64 28.7-64 64zM64 32l64 0c0-17.7-14.3-32-32-32S64 14.3 64 32zm0 128l0 80 64 0 0-80-64 0zm96 0l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm96 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm96 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M176 112V48c0-8.8-7.2-16-16-16H11.8C5.3 32 0 37.3 0 43.8c0 3.9 1.9 7.5 5.1 9.7L43.6 80 5.1 106.5c-3.2 2.2-5.1 5.8-5.1 9.7C0 122.7 5.3 128 11.8 128H160c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default HandPointRibbon;