
import { Icon } from "../../index";

/**
 * A component that renders the `kitchen-set` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kitchen-set?s=sharp-solid kitchen-set}
 * @preview ![kitchen-set](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/kitchen-set.svg)
 */
const KitchenSet: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M240 144A96 96 0 1 0 48 144a96 96 0 1 0 192 0zm44.4 32C269.9 240.1 212.5 288 144 288C64.5 288 0 223.5 0 144S64.5 0 144 0c68.5 0 125.9 47.9 140.4 112l59.6 0 0-16 48 0 104 0 48 0 0 48 0 48-48 0-104 0-48 0 0-16-59.6 0zM144 80a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM424 240l0 32 120 0 0 48-288 0 0-48 120 0 0-32 48 0zM288 352l224 0 0 160-224 0 0-160zM176 320c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0 32L32 448l0-128 96 0 32 0 16 0zm0 64c8.8 0 16-7.2 16-16s-7.2-16-16-16l-16 0 0 32 16 0zm48 80l0 48L0 512l0-48 224 0z" />
    </Icon>
);

export default KitchenSet;