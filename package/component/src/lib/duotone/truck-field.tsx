
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-field` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field?s=duotone truck-field}
 * @preview ![truck-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/truck-field.svg)
 */
const TruckField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 400a80 80 0 1 0 160 0A80 80 0 1 0 96 400zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M32 96c0-35.3 28.7-64 64-64l224 0c23.7 0 44.4 12.9 55.4 32l51.8 0c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2l4.2 0c35.3 0 64 28.7 64 64l0 32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-33.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L32 384c-17.7 0-32-14.3-32-32s14.3-32 32-32l0-32c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l0-32zM384 224l85.9 0-42.7-96L384 128l0 96z" />
    </Icon>
);

export default TruckField;