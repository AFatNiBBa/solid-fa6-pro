
import { Icon } from "../../index";

/**
 * A component that renders the `pen-nib` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-nib?s=light pen-nib}
 * @preview ![pen-nib](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pen-nib.svg)
 */
const PenNib: typeof Icon = x => (
    <Icon {...x}>
        <path d="M377.4 45.3L310.6 112 400 201.4l66.7-66.7c12.5-12.5 12.5-32.8 0-45.3L422.6 45.3c-12.5-12.5-32.8-12.5-45.3 0zM279.7 97.7l75.1-75.1c25-25 65.5-25 90.5 0l44.1 44.1c25 25 25 65.5 0 90.5l-75.1 75.1L376.8 370c-7.3 26.6-27.7 47.6-54.2 55.6L47.4 508.1c-12.3 3.7-25.7 .3-34.7-8.8s-12.5-22.4-8.8-34.7L86.5 189.4c7.9-26.4 28.9-46.9 55.6-54.2L279.7 97.7zm3.6 32.2L150.5 166.1c-16 4.4-28.6 16.6-33.3 32.5L42.7 446.7 152.9 336.5c-5.6-9.5-8.9-20.6-8.9-32.5c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-11.9 0-23-3.2-32.5-8.9L65.3 469.3l248.1-74.4c15.9-4.8 28.2-17.4 32.5-33.3l36.2-132.8-98.9-98.9zM208 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
    </Icon>
);

export default PenNib;