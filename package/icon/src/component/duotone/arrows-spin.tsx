
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrows-spin` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-spin?s=duotone arrows-spin}
 * @preview ![arrows-spin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrows-spin.svg)
 */
const ArrowsSpin: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M33.1 255.5c0 11 .8 21.9 2.3 32.5c21.7 0 43.3 0 65 0c-2.2-10.5-3.3-21.3-3.3-32.5c0-39.7 14.5-76 38.4-104l30.5 30.5c10.1 10.1 27.3 2.9 27.3-11.3l0-105.4c0-8.8-7.2-16-16-16L72 49.4c-14.3 0-21.4 17.2-11.3 27.3l29.5 29.5c-35.5 39.6-57 92-57 149.3zm287.8 88l0 105.4c0 8.8 7.2 16 16 16l105.4 0c14.3 0 21.4-17.2 11.3-27.3l-31-31c36.4-39.8 58.6-92.8 58.6-151c0-10.7-.7-21.2-2.2-31.5L414 224c2 10.2 3.1 20.7 3.1 31.5c0 40.5-15.1 77.5-39.9 105.7l-29-29c-10.1-10.1-27.3-2.9-27.3 11.3z" />
        <path d="M35.5 288s0 0 0 0l65 0s0 0 0 0l-65 0zM257.1 95.5c-11.4 0-22.4 1.2-33.1 3.4l0-65c10.8-1.6 21.9-2.4 33.1-2.4c58.2 0 111.2 22.2 151 58.6l29.4-29.4c10.1-10.1 27.3-2.9 27.3 11.3l0 105.4c0 8.8-7.2 16-16 16l-105.4 0c-14.3 0-21.4-17.2-11.3-27.3l30.6-30.6c-28.2-24.8-65.2-39.9-105.7-39.9zM182.1 348.2l-28.9 28.9c28 23.9 64.3 38.4 104 38.4c10.6 0 20.9-1 30.9-3l0 64.9c-10.1 1.4-20.4 2.1-30.9 2.1c-57.4 0-109.7-21.6-149.3-57L76.7 453.6c-10.1 10.1-27.3 2.9-27.3-11.3l0-105.4c0-8.8 7.2-16 16-16l105.4 0c14.3 0 21.4 17.2 11.3 27.3z" />
    </Icon>
);

export default ArrowsSpin;