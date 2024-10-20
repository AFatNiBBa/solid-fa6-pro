
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-rotate` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-rotate?s=duotone arrows-rotate}
 * @preview ![arrows-rotate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-rotate.svg)
 */
const ArrowsRotate: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 320l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-51.1 17.6 17.5c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0L125.6 352l50.4 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L48 288c-17.7 0-32 14.3-32 32z" />
        <path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160 336 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l127.5 0c0 0 0 0 0 0l.4 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 51.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5z" />
    </Icon>
);

export default ArrowsRotate;