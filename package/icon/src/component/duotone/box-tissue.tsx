
import { Icon, generic } from "../../index";

/**
 * A component that renders the `box-tissue` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/box-tissue?s=duotone box-tissue}
 * @preview ![box-tissue](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/box-tissue.svg)
 */
const BoxTissue: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 272L0 384l512 0 0-112c0-26.5-21.5-48-48-48l-58.7 0L384 288l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-58.7 0-238.2 0L80 320c-8.8 0-16-7.2-16-16s7.2-16 16-16l48 0c-4.7-21.3-9.5-42.7-14.2-64L48 224c-26.5 0-48 21.5-48 48z" />
        <path d="M103.9 0L208 0c40 0 52 24 64 48s24 48 64 48l67.6 0c21.8 0 37.3 21.4 30.4 42.1L373.3 320l-238.2 0L72.7 38.9C68.2 19 83.4 0 103.9 0zM512 384l0 80c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-80 512 0z" />
    </Icon>
);

export default BoxTissue;