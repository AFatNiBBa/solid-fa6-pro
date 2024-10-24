
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-plus?s=sharp-thin bag-shopping-plus}
 * @preview ![bag-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bag-shopping-plus.svg)
 */
const BagShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 96l0 32 160 0 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80zm-16 32l0-32c0-53 43-96 96-96l8 0 0 .3c49.3 4.1 88 45.3 88 95.7l0 32 112 0 16 0 0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 112 0zm0 16L16 144l0 352 416 0 0-352-112 0-16 0-160 0-16 0zm8 168l8 0 72 0 0-72 0-8 16 0 0 8 0 72 72 0 8 0 0 16-8 0-72 0 0 72 0 8-16 0 0-8 0-72-72 0-8 0 0-16z" />
    </Icon>
);

export default BagShoppingPlus;