
import { Icon } from "../../index";

/**
 * A component that renders the `block` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/block?s=regular block}
 * @preview ![block](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/block.svg)
 */
const Block: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm48 88a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM112 392a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm248 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Block;