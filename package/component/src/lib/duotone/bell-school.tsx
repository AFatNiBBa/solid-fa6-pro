
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bell-school` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-school?s=duotone bell-school}
 * @preview ![bell-school](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bell-school.svg)
 */
const BellSchool: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 208a208 208 0 1 0 416-.2A208 208 0 1 0 0 208zm288 0a80 80 0 1 1 -160 0 80 80 0 1 1 160 0z" />
        <path d="M208 160a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 256c55.9 0 106.6-22 144-57.9L352 464l40 0c18.6 0 34.7-10.6 42.7-26c-11.4-8.8-18.7-22.5-18.7-38c0-26.5 21.5-48 48-48s48 21.5 48 48c0 19.4-11.5 36.1-28 43.7c-11.9 39.5-48.6 68.3-92 68.3l-40 0-240 0c-26.5 0-48-21.5-48-48l0-105.9C101.4 394 152.1 416 208 416z" />
    </Icon>
);

export default BellSchool;