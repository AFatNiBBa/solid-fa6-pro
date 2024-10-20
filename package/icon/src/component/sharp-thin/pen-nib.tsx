
import { Icon } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=sharp-thin pen-nib}
 * @preview ![pen-nib](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pen-nib.svg)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path d="M410.3 207l79-79L384 22.6l-79 79L410.3 207zm-9.8 12.8L292.2 111.5 108.9 172.6 18.1 467.5l7.5 7.5L163.1 337.5c-7-9.3-11.1-21-11.1-33.5c0-30.9 25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56c-12.6 0-24.2-4.1-33.5-11.1L37 486.3l7.5 7.5 294.9-90.7 61.1-183.3zM352 416L40 512 0 472 96 160 288 96l84.7-84.7L384 0l11.3 11.3L500.7 116.7 512 128l-11.3 11.3L416 224 352 416zM168 304a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
    </Icon>
);

export default PenNib;