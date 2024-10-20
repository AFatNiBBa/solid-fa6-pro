
import { Icon, generic } from "../../index";

/**
 * A component that renders the `club` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/club?s=duotone club}
 * @preview ![club](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/club.svg)
 */
const Club: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288c0 70.7 57.3 128 128 128c38.2 0 72.5-16.8 96-43.3L224 256c0-17.7 14.3-32 32-32s32 14.3 32 32l0 116.7c23.5 26.6 57.8 43.3 96 43.3c70.7 0 128-57.3 128-128s-57.3-128-128-128c-1.4 0-2.7 0-4 .1c2.6-10.2 4-21 4-32.1C384 57.3 326.7 0 256 0S128 57.3 128 128c0 11.1 1.4 21.8 4 32.1c-1.3 0-2.7-.1-4-.1C57.3 160 0 217.3 0 288z" />
        <path d="M256 224c17.7 0 32 14.3 32 32l0 192 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0 0-192c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default Club;