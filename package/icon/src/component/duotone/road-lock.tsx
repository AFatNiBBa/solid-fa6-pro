
import { Icon, generic } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=duotone road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 425.4C32 455.5 56.5 480 86.6 480L288 480l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64 32 0 0-128c0-23.7 12.9-44.4 32-55.4l0-24.6c0-58.3 44.6-106.2 101.5-111.5L487.1 74.6C478 49.1 453.9 32 426.8 32L352 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-74.8 0c-27.1 0-51.3 17.1-60.3 42.6L35.1 407.2c-2.1 5.9-3.1 12-3.1 18.2zM288 224c0-17.7 14.3-32 32-32s32 14.3 32 32l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-160 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default RoadLock;