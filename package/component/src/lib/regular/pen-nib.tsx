
import { Icon } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=regular pen-nib}
 * @preview ![pen-nib](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/pen-nib.svg)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368.4 18.3c21.9-21.9 57.3-21.9 79.2 0l46.1 46.1c21.9 21.9 21.9 57.3 0 79.2l-71 71L412.2 225 371.6 374.1c-4.8 17.8-18.1 32-35.5 38.1L72 505c-18.5 6.5-39.1 1.8-52.9-12S.5 458.5 7 440L99.8 175.9c6.1-17.4 20.3-30.6 38.1-35.5L287 99.8l10.4-10.4 71-71zM296.9 146.8L150.5 186.7c-2.5 .7-4.6 2.6-5.4 5.1L62.5 426.9 164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L85.1 449.5l235.1-82.6c2.5-.9 4.4-2.9 5.1-5.4l39.9-146.4-68.3-68.3z" />
    </Icon>
);

export default PenNib;