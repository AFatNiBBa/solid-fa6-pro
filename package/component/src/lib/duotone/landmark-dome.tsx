
import { Icon, generic } from "../../index";

/**
 * A component that renders the `landmark-dome` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-dome?s=duotone landmark-dome}
 * @preview ![landmark-dome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/landmark-dome.svg)
 */
const LandmarkDome: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.4 489.3C5.5 502.8 17.9 512 32 512l448 0c14.1 0 26.5-9.2 30.6-22.7c.9-3.1 1.4-6.2 1.4-9.3c0-10.5-5.2-20.6-14.2-26.6l-48-32c-.6-.4-1.2-.7-1.8-1.1L448 256l-64 0 0 160-40 0 0-160-64 0 0 160-48 0 0-160-64 0 0 160-40 0 0-160-64 0 0 164.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9z" />
        <path d="M248 0c-13.3 0-24 10.7-24 24l0 10.7C143.6 48.1 80.1 111.6 66.7 192L64 192c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-2.7 0C431.9 111.6 368.4 48.1 288 34.7L288 24c0-13.3-10.7-24-24-24L248 0z" />
    </Icon>
);

export default LandmarkDome;