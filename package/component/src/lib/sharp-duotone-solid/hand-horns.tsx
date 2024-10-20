
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-horns` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-horns?s=sharp-duotone-solid hand-horns}
 * @preview ![hand-horns](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hand-horns.svg)
 */
const HandHorns: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 272l0 91c0 33.9 13.5 66.5 37.5 90.5l11.6 11.6c30 30 70.7 46.9 113.1 46.9l61.7 0c88.4 0 160-71.6 160-160l0-32 0-128 0-128-64 0 0 128 0 128-96 0 0 48 0 16-16 0L96 384l-16 0 0-32 16 0 96 0 0-32 0-48-8 0L0 272zM32 0l0 240 64 0L96 0 32 0z" />
        <path d="M192 128l-64 0 0 112 64 0 0-112zm96 32l-64 0 0 128 64 0 0-128z" />
    </Icon>
);

export default HandHorns;