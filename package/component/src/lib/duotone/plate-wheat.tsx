
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plate-wheat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plate-wheat?s=duotone plate-wheat}
 * @preview ![plate-wheat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/plate-wheat.svg)
 */
const PlateWheat: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 184c-13.3 0-24-10.7-24-24zM32 88c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm0 144c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zM160 48c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80l0-16zm0 208c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16l0-16zM272 48c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80l0-16zm0 208c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16l0-16zM384 48c0-8.8 7.2-16 16-16c44.2 0 80 35.8 80 80l0 16c0 8.8-7.2 16-16 16c-44.2 0-80-35.8-80-80l0-16zm0 208c0-44.2 35.8-80 80-80c8.8 0 16 7.2 16 16l0 16c0 44.2-35.8 80-80 80c-8.8 0-16-7.2-16-16l0-16z" />
        <path d="M27.8 320C13 320 1.6 332.9 3.5 347.6C9.7 397.8 47.8 437 96 446l0 2c0 17.7 14.3 32 32 32l256 0c17.7 0 32-14.3 32-32l0-2c48.2-9 86.3-48.2 92.6-98.4c1.8-14.7-9.6-27.6-24.4-27.6L27.8 320z" />
    </Icon>
);

export default PlateWheat;