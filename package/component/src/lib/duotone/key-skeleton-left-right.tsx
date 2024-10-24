
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key-skeleton-left-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton-left-right?s=duotone key-skeleton-left-right}
 * @preview ![key-skeleton-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/key-skeleton-left-right.svg)
 */
const KeySkeletonLeftRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 70.7 57.3 128 128 128c59.6 0 109.8-40.8 124-96l196 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-68 0c-14.2-55.2-64.3-96-124-96C57.3 256 0 313.3 0 384zm192 0A64 64 0 1 1 64 384a64 64 0 1 1 128 0z" />
        <path d="M512 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 192c70.7 0 128-57.3 128-128S582.7 0 512 0C452.4 0 402.2 40.8 388 96L192 96c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 32 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32 68 0c14.2 55.2 64.3 96 124 96z" />
    </Icon>
);

export default KeySkeletonLeftRight;