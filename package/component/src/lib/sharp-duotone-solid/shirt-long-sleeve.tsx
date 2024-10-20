
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt-long-sleeve` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt-long-sleeve?s=sharp-duotone-solid shirt-long-sleeve}
 * @preview ![shirt-long-sleeve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shirt-long-sleeve.svg)
 */
const ShirtLongSleeve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 195.7L0 208 0 368l0 48 96 0 0-48 0-147.7 48-87.3L144 512l352 0 0-378.9 48 87.3L544 368l0 48 96 0 0-48 0-160 0-12.3-5.9-10.8-88-160L532.4 0 504 0l-8 0L460 0 432 0c0 61.9-50.1 112-112 112S208 61.9 208 0L180 0 144 0l-8 0L107.6 0 93.9 24.9l-88 160L0 195.7z" />
        <path d="M208 0c0 61.9 50.1 112 112 112s112-50.1 112-112L400 0c0 44.2-35.8 80-80 80s-80-35.8-80-80L208 0z" />
    </Icon>
);

export default ShirtLongSleeve;