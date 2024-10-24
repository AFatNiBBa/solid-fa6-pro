
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-tea-saucer` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea-saucer?s=duotone mug-tea-saucer}
 * @preview ![mug-tea-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mug-tea-saucer.svg)
 */
const MugTeaSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 448c0 17.7 14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 416c-17.7 0-32 14.3-32 32zM160 157.3l0 66.7c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6L240 32l-32 0 0 50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6z" />
        <path d="M208 32l0 50.7c0 8.5-3.4 16.6-9.4 22.6l-29.3 29.3c-6 6-9.4 14.1-9.4 22.6l0 66.7c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-66.7c0-8.5-3.4-16.6-9.4-22.6l-29.3-29.3c-6-6-9.4-14.1-9.4-22.6L240 32l208 0 64 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0c0 53-43 96-96 96l-192 0c-53 0-96-43-96-96L96 64c0-17.7 14.3-32 32-32l80 0zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128z" />
    </Icon>
);

export default MugTeaSaucer;