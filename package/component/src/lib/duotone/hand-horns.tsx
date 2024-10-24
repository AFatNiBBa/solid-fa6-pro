
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-horns` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-horns?s=duotone hand-horns}
 * @preview ![hand-horns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-horns.svg)
 */
const HandHorns: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 336l0 27c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l0-64 0-96 0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96 0 64c0 35.3-28.7 64-64 64c-11.7 0-22.6-3.1-32-8.6l0 .6c0 39.8-32.2 72-72 72l-56 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l56 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-88 0c-35.3 0-64 28.7-64 64zM32 32l0 208 64 0L96 32C96 14.3 81.7 0 64 0S32 14.3 32 32z" />
        <path d="M160 128c-17.7 0-32 14.3-32 32l0 48c0 17.7 14.3 32 32 32s32-14.3 32-32l0-48c0-17.7-14.3-32-32-32zm96 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-64c0-17.7-14.3-32-32-32z" />
    </Icon>
);

export default HandHorns;