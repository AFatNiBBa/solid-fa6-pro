
import { Icon, generic } from "../../index";

/**
 * A component that renders the `grill-hot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill-hot?s=sharp-duotone-solid grill-hot}
 * @preview ![grill-hot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/grill-hot.svg)
 */
const GrillHot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 24 0 2.6C96 48 106.7 68 124.5 79.8l12.4 8.3c4.5 3 7.1 8 7.1 13.3l0 2.6 0 24 48 0 0-24 0-2.6C192 80 181.3 60 163.5 48.2l-12.4-8.3c-4.5-3-7.1-8-7.1-13.3l0-2.6 0-24L96 0zM208 0l0 24 0 2.6C208 48 218.7 68 236.5 79.8l12.4 8.3c4.5 3 7.1 8 7.1 13.3l0 2.6 0 24 48 0 0-24 0-2.6C304 80 293.3 60 275.5 48.2l-12.4-8.3c-4.5-3-7.1-8-7.1-13.3l0-2.6 0-24L208 0z" />
        <path d="M448 160c0 85.3-47.7 159.5-117.9 197.3l44 102.6 4 9.3 9.5 22.1-44.1 18.9-9.5-22.1-4-9.3L327 472l-171.7 0c-9.5 23.5-32.5 40-59.3 40c-35.3 0-64-28.7-64-64s28.7-64 64-64c3.4 0 6.8 .3 10.1 .8l11.8-27.5C47.7 319.5 0 245.3 0 160l448 0zM155.3 424l151.1 0-20.8-48.6C266.1 381 245.4 384 224 384s-42.1-3-61.6-8.6L147.5 410c3.2 4.3 5.8 9 7.8 14zM96 472a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default GrillHot;