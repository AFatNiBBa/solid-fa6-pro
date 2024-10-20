
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kitchen-set` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kitchen-set?s=sharp-duotone-solid kitchen-set}
 * @preview ![kitchen-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kitchen-set.svg)
 */
const KitchenSet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 480l0 32 224 0 0-32L0 480zM64 144a80 80 0 1 0 160 0A80 80 0 1 0 64 144zM256 272l0 48 32 0 224 0 32 0 0-48-120 0 0-32-48 0 0 32-120 0z" />
        <path d="M224 144A80 80 0 1 0 64 144a80 80 0 1 0 160 0zm60.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l59.6 0 0-16 48 0 104 0 48 0 0 48 0 48-48 0-104 0-48 0 0-16-59.6 0zM128 320l32 0 16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0 32L32 448l0-128 96 0zm48 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zm336-64l0 192-224 0 0-192 224 0z" />
    </Icon>
);

export default KitchenSet;