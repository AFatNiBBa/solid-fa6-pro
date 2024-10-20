
import { Icon } from "../../index";

/**
 * A component that renders the `square-down-right` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-right?s=solid square-down-right}
 * @preview ![square-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-down-right.svg)
 */
const SquareDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 480c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0zM160 352c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l40-40-71-71C114 210 112 205.1 112 200s2-10 5.7-13.7l36.7-36.7c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7l71 71 40-40c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 144c0 8.8-7.2 16-16 16l-144 0z" />
    </Icon>
);

export default SquareDownRight;