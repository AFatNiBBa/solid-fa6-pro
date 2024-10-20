
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-left?s=sharp-light square-down-left}
 * @preview ![square-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/square-down-left.svg)
 */
const SquareDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 448L32 64l384 0 0 384L32 448zM0 480l32 0 384 0 32 0 0-32 0-384 0-32-32 0L32 32 0 32 0 64 0 448l0 32zM128 368l160 0 6.6 0 4.7-4.7 16-16L326.6 336l-11.3-11.3L274.6 284l64.7-64.7L350.6 208l-11.3-11.3-56-56L272 129.4l-11.3 11.3L196 205.4l-40.7-40.7L144 153.4l-11.3 11.3-16 16-4.7 4.7 0 6.6 0 160 0 16 16 0zm16-169.4l40.7 40.7L196 250.6l11.3-11.3L272 174.6 305.4 208l-64.7 64.7L229.4 284l11.3 11.3L281.4 336 144 336l0-137.4z" />
    </Icon>
);

export default SquareDownLeft;