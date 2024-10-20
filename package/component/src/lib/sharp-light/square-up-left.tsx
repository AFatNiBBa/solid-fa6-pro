
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-left?s=sharp-light square-up-left}
 * @preview ![square-up-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-up-left.svg)
 */
const SquareUpLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l0 384 384 0 0-384L32 64zM0 32l32 0 384 0 32 0 0 32 0 384 0 32-32 0L32 480 0 480l0-32L0 64 0 32zM128 144l160 0 6.6 0 4.7 4.7 16 16L326.6 176l-11.3 11.3L274.6 228l64.7 64.7L350.6 304l-11.3 11.3-56 56L272 382.6l-11.3-11.3L196 306.6l-40.7 40.7L144 358.6l-11.3-11.3-16-16-4.7-4.7 0-6.6 0-160 0-16 16 0zm16 169.4l40.7-40.7L196 261.4l11.3 11.3L272 337.4 305.4 304l-64.7-64.7L229.4 228l11.3-11.3L281.4 176 144 176l0 137.4z" />
    </Icon>
);

export default SquareUpLeft;