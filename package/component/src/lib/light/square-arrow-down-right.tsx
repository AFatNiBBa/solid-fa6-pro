
import { Icon } from "../../index";

/**
 * A component that renders the `square-arrow-down-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-arrow-down-right?s=light square-arrow-down-right}
 * @preview ![square-arrow-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-arrow-down-right.svg)
 */
const SquareArrowDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 448c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0zm64-32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320zM168 352c-8.8 0-16-7.2-16-16s7.2-16 16-16l97.4 0L132.7 187.3c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L288 297.4 288 192c0-8.8 7.2-16 16-16s16 7.2 16 16l0 144c0 8.8-7.2 16-16 16l-136 0z" />
    </Icon>
);

export default SquareArrowDownRight;