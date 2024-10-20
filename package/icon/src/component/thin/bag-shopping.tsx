
import { Icon } from "../../index";

/**
 * A component that renders the `bag-shopping` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping?s=thin bag-shopping}
 * @preview ![bag-shopping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bag-shopping.svg)
 */
const BagShopping: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 96l0 32 160 0 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80zm-16 48l-80 0c-17.7 0-32 14.3-32 32l0 240c0 44.2 35.8 80 80 80l256 0c44.2 0 80-35.8 80-80l0-240c0-17.7-14.3-32-32-32l-80 0 0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88-160 0 0 88c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-88zm0-16l0-32c0-53 43-96 96-96s96 43 96 96l0 32 80 0c26.5 0 48 21.5 48 48l0 240c0 53-43 96-96 96L96 512c-53 0-96-43-96-96L0 176c0-26.5 21.5-48 48-48l80 0z" />
    </Icon>
);

export default BagShopping;