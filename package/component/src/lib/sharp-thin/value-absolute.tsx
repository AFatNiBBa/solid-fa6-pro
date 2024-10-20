
import { Icon } from "../../index";

/**
 * A component that renders the `value-absolute` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/value-absolute?s=sharp-thin value-absolute}
 * @preview ![value-absolute](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/value-absolute.svg)
 */
const ValueAbsolute: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 32L0 32l0 8L0 472l0 8 16 0 0-8L16 40l0-8zM149.7 138.3l-5.7-5.7L132.7 144l5.7 5.7L244.7 256 138.3 362.3l-5.7 5.7L144 379.3l5.7-5.7L256 267.3 362.3 373.7l5.7 5.7L379.3 368l-5.7-5.7L267.3 256 373.7 149.7l5.7-5.7L368 132.7l-5.7 5.7L256 244.7 149.7 138.3zM512 40l0-8-16 0 0 8 0 432 0 8 16 0 0-8 0-432z" />
    </Icon>
);

export default ValueAbsolute;