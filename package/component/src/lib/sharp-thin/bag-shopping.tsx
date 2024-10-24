
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=sharp-thin bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 96l0 32 160 0 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80zm-16 48L16 144l0 352 416 0 0-352-112 0 0 88 0 8-16 0 0-8 0-88-160 0 0 88 0 8-16 0 0-8 0-88zm0-16l0-32c0-53 43-96 96-96s96 43 96 96l0 32 112 0 16 0 0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 112 0z" />
    </Icon>
);

export default BagShopping;