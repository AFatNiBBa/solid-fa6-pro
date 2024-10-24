
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shirt-long-sleeve` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shirt-long-sleeve?s=duotone shirt-long-sleeve}
 * @preview ![shirt-long-sleeve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shirt-long-sleeve.svg)
 */
const ShirtLongSleeve: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224.4L0 384c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-159.6c0-2.7 .7-5.3 2-7.7l46-83.7L144 448c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-314.9 46 83.7c1.3 2.4 2 5 2 7.7L544 384c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-159.6c0-18.9-4.8-37.4-13.9-54L559.7 49.7C544.1 21.2 515.1 2.8 483 .3c-1-.2-2-.3-3-.3l-4.4 0L460 0 432 0c0 61.9-50.1 112-112 112S208 61.9 208 0L180 0 164.4 0 160 0c-1 0-2 .1-3 .3c-32.1 2.5-61 20.9-76.7 49.5L13.9 170.5C4.8 187 0 205.6 0 224.4z" />
        <path d="M208 0c0 61.9 50.1 112 112 112s112-50.1 112-112L400 0c0 44.2-35.8 80-80 80s-80-35.8-80-80L208 0z" />
    </Icon>
);

export default ShirtLongSleeve;