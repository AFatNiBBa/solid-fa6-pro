
import { Icon } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=sharp-thin square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 416L16 464 16 48l416 0zm16-16l-16 0L16 32 0 32 0 48 0 464l0 16 16 0 416 0 16 0 0-16 0-416 0-16zM163.3 179.3l25.4 25.4L200 216l-11.3 11.3-73.4 73.4L104 312l11.3 11.3 41.4 41.4L168 376l11.3-11.3 73.4-73.4L264 280l11.3 11.3 25.4 25.4L312 328l11.3-11.3L336 304l0-144 0-16-16 0-144 0-12.7 12.7L152 168l11.3 11.3zm48 48L222.6 216l-11.3-11.3L174.6 168l8-8L320 160l0 137.4-8 8-36.7-36.7L264 257.4l-11.3 11.3L168 353.4 126.6 312l84.7-84.7z" />
    </Icon>
);

export default SquareUpRight;