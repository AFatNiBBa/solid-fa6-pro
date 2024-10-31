
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=duotone skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M3.4 273.7c-7.9 15.8-1.5 35 14.3 42.9L152.4 384 17.7 451.4C1.9 459.3-4.5 478.5 3.4 494.3C9 505.5 20.3 512 32 512c4.8 0 9.7-1.1 14.3-3.4L224 419.8l177.7 88.8c4.6 2.3 9.5 3.4 14.3 3.4c11.7 0 23-6.5 28.6-17.7c7.9-15.8 1.5-35-14.3-42.9L295.6 384l134.8-67.4c15.8-7.9 22.2-27.1 14.3-42.9C439 262.5 427.7 256 416 256c-4.8 0-9.7 1.1-14.3 3.4L224 348.2 46.3 259.4c-4.6-2.3-9.5-3.4-14.3-3.4c-11.7 0-23 6.5-28.6 17.7z" />
        <path d="M304 234.4c38.6-23 64-62.1 64-106.4C368 57.3 303.5 0 224 0S80 57.3 80 128c0 44.4 25.4 83.5 64 106.4l0 21.6c0 17.7 14.3 32 32 32l96 0c17.7 0 32-14.3 32-32l0-21.6zM136 144a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm144-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default SkullCrossbones;