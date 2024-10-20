
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock-keyhole` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-keyhole?s=duotone lock-keyhole}
 * @preview ![lock-keyhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lock-keyhole.svg)
 */
const LockKeyhole: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 64 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144z" />
        <path d="M64 192c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 192zM256 320l0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32s32 14.3 32 32z" />
    </Icon>
);

export default LockKeyhole;