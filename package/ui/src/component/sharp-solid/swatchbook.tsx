
import { Icon } from "../../index";

/**
 * A component that renders the `swatchbook` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swatchbook?s=sharp-solid swatchbook}
 * @preview ![swatchbook](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/swatchbook.svg)
 */
const Swatchbook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 416c0 53 43 96 96 96s96-43 96-96L192 0 0 0 0 416zM128 64l0 64-64 0 0-64 64 0zm0 128l0 64-64 0 0-64 64 0zM72 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm108.7 96L512 512l0-192-139 0L186.5 506.5c-1.9 1.9-3.8 3.7-5.8 5.5zM458 189.7L322.3 54 224 152.2l0 271.5 234-234z" />
    </Icon>
);

export default Swatchbook;