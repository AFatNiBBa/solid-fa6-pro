
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kitchen-set` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kitchen-set?s=duotone kitchen-set}
 * @preview ![kitchen-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kitchen-set.svg)
 */
const KitchenSet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 496c0 8.8 7.2 16 16 16l192 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L16 480c-8.8 0-16 7.2-16 16zM64 144a80 80 0 1 0 160 0A80 80 0 1 0 64 144zM256 296c0 13.3 10.7 24 24 24l8 0 224 0 8 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-96 0 0-8c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8-96 0c-13.3 0-24 10.7-24 24z" />
        <path d="M224 144A80 80 0 1 0 64 144a80 80 0 1 0 160 0zm60.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l71.8 0c8.8-9.8 21.6-16 35.8-16l104 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-104 0c-14.2 0-27-6.2-35.8-16l-71.8 0zM48 320l80 0 16 0 32 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-80c0-8.8 7.2-16 16-16zm128 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zm336-64l0 144c0 26.5-21.5 48-48 48l-128 0c-26.5 0-48-21.5-48-48l0-144 224 0z" />
    </Icon>
);

export default KitchenSet;