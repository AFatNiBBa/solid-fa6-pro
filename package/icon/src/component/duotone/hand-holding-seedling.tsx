
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hand-holding-seedling` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-holding-seedling?s=duotone hand-holding-seedling}
 * @preview ![hand-holding-seedling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hand-holding-seedling.svg)
 */
const HandHoldingSeedling: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64c0 17.7 14.3 32 32 32l160 0 160.5 0c29 0 57.3-9.3 80.7-26.5l126.6-93.3c10.6-7.8 16.3-20 16.3-32.2c0-8.2-2.5-16.6-7.8-23.7c-13.1-17.8-38.1-21.6-55.9-8.5L392.6 416 272 416c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0 64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0-16 0-78.3 0c-29.1 0-57.3 9.9-80 28L68.8 384 32 384c-17.7 0-32 14.3-32 32z" />
        <path d="M96 14.5C96 6.5 102.5 0 110.5 0L160 0c88.4 0 160 71.6 160 160l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-14.5 0C161.1 160 96 94.9 96 14.5zm384 0C480 89 424.1 150.3 352 159c-.2-44.9-15.9-86.2-42-118.8C338.2 15.2 375.3 0 416 0l49.5 0c8 0 14.5 6.5 14.5 14.5z" />
    </Icon>
);

export default HandHoldingSeedling;