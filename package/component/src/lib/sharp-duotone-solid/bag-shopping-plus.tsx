
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bag-shopping-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bag-shopping-plus?s=sharp-duotone-solid bag-shopping-plus}
 * @preview ![bag-shopping-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bag-shopping-plus.svg)
 */
const BagShoppingPlus: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 160l112 0 48 0 128 0 48 0 112 0 0 352L0 512 0 160zM120 312l0 48 24 0 56 0 0 56 0 24 48 0 0-24 0-56 56 0 24 0 0-48-24 0-56 0 0-56 0-24-48 0 0 24 0 56-56 0-24 0z" />
        <path d="M224 48c-35.3 0-64 28.7-64 64l0 48-48 0 0-48C112 50.1 162.1 0 224 0s112 50.1 112 112l0 48-48 0 0-48c0-35.3-28.7-64-64-64zM120 312l24 0 56 0 0-56 0-24 48 0 0 24 0 56 56 0 24 0 0 48-24 0-56 0 0 56 0 24-48 0 0-24 0-56-56 0-24 0 0-48z" />
    </Icon>
);

export default BagShoppingPlus;