
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oil-can` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-can?s=duotone oil-can}
 * @preview ![oil-can](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/oil-can.svg)
 */
const OilCan: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 96c0 17.7 14.3 32 32 32l32 0 0 32 64 0 0-32 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64c-17.7 0-32 14.3-32 32z" />
        <path d="M368.9 160c9.9 0 19.7 2.3 28.6 6.8L448 192l167-35.8c18.1-3.9 30.7 17.6 18.4 31.5L451.1 394.3c-12.1 13.8-29.6 21.7-48 21.7L144 416c-26.5 0-48-21.5-48-48l0-21.3-67.5-30C11.2 309 0 291.8 0 272.8L0 208c0-26.5 21.5-48 48-48l48 0 48 0 224.9 0zM96 208l-48 0 0 64.8 48 21.3L96 208z" />
    </Icon>
);

export default OilCan;