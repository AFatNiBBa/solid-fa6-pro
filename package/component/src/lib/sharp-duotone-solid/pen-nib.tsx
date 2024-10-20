
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=sharp-duotone-solid pen-nib}
 * @preview ![pen-nib](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-nib.svg)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l20.7 20.7 144-144c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7l-144 144L64 512l288-96 64-192L288 96 96 160 0 448z" />
        <path d="M512 128l-96 96L288 96 384 0 512 128z" />
    </Icon>
);

export default PenNib;