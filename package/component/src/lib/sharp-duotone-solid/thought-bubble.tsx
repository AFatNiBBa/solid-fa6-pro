
import { Icon, generic } from "../../index";

/**
 * A component that renders the `thought-bubble` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thought-bubble?s=sharp-duotone-solid thought-bubble}
 * @preview ![thought-bubble](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/thought-bubble.svg)
 */
const ThoughtBubble: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l0 64 64 0 0-64L0 448zm104-56l0 80 80 0 0-80-80 0z" />
        <path d="M256 0c-53.7 0-99.7 33.1-118.7 80L128 80C57.3 80 0 137.3 0 208s57.3 128 128 128l44.8 0c16.6 28.7 47.6 48 83.2 48s66.6-19.3 83.2-48l44.8 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-9.3 0c-19-46.9-65-80-118.7-80z" />
    </Icon>
);

export default ThoughtBubble;