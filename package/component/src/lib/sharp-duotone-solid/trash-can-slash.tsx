
import { Icon, generic } from "../../index";

/**
 * A component that renders the `trash-can-slash` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/trash-can-slash?s=sharp-duotone-solid trash-can-slash}
 * @preview ![trash-can-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/trash-can-slash.svg)
 */
const TrashCanSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 19.8L153 96l391 0 0-64L416 32 400 0 240 0 224 32 96 32zm32 164.8L128 512l384 0 0-12.6-80-63 0 11.6-32 0 0-16 0-20.8-64-50.4 0 71.3 0 16-32 0 0-16 0-96.5-64-50.4L240 432l0 16-32 0 0-16 0-172.1-80-63zM194.2 128c36.6 28.4 73.2 56.8 109.8 85.2l0-5.2 0-16 32 0 0 16 0 30.1c21.3 16.6 42.7 33.1 64 49.7l0-79.8 0-16 32 0 0 16 0 104.6 80 62.1L512 128l-317.8 0z" />
        <path d="M29.4 .1l19 14.7L620.9 459.3l19 14.7-29.4 37.9-19-14.7L19 52.7 0 38 29.4 .1z" />
    </Icon>
);

export default TrashCanSlash;