
import { Icon, generic } from "../../index";

/**
 * A component that renders the `arrow-up-right-and-arrow-down-left-from-center` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-right-and-arrow-down-left-from-center?s=duotone arrow-up-right-and-arrow-down-left-from-center}
 * @preview ![arrow-up-right-and-arrow-down-left-from-center](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/arrow-up-right-and-arrow-down-left-from-center.svg)
 */
const ArrowUpRightAndArrowDownLeftFromCenter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 352L0 480c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-50.7 0L214.6 342.6c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6s-14.4-9.4-22.6-9.4s-16.4 3.1-22.6 9.4L64 402.7 64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32z" />
        <path d="M320 32c0-17.7 14.3-32 32-32L480 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-50.7L342.6 214.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L402.7 64 352 64c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default ArrowUpRightAndArrowDownLeftFromCenter;