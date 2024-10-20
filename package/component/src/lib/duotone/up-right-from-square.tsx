
import { Icon, generic } from "../../index";

/**
 * A component that renders the `up-right-from-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-right-from-square?s=duotone up-right-from-square}
 * @preview ![up-right-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/up-right-from-square.svg)
 */
const UpRightFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 112C0 67.8 35.8 32 80 32l112 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 96c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-112c0-17.7 14.3-32 32-32s32 14.3 32 32l0 112c0 44.2-35.8 80-80 80L80 512c-44.2 0-80-35.8-80-80L0 112z" />
        <path d="M322.4 19.8C327.4 7.8 339.1 0 352 0L480 0c17.7 0 32 14.3 32 32l0 128c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9L416 141.3 246.6 310.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L370.7 96 329.4 54.6c-9.2-9.2-11.9-22.9-6.9-34.9z" />
    </Icon>
);

export default UpRightFromSquare;