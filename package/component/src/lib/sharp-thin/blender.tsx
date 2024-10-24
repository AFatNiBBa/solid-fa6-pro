
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=sharp-thin blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M8 0L0 0 0 8 0 232l0 8 8 0 140 0 9.3 112L112 352l-16 0 0 16 0 128 0 16 16 0 352 0 16 0 0-16 0-128 0-16-16 0-40 0L508 16l4-16L495.5 0 160 0 144.1 0 128 0 8 0zM129.3 16l17.3 208L16 224 16 16l113.3 0zM407.5 352l-234.1 0-28-336L160 16l331.5 0-20 80L296 96l-8 0 0 16 8 0 171.5 0-20 80L296 192l-8 0 0 16 8 0 147.5 0-36 144zM112 496l0-128 352 0 0 128-352 0zm176-80a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Blender;