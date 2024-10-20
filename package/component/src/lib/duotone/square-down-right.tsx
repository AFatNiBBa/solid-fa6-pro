
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-down-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-down-right?s=duotone square-down-right}
 * @preview ![square-down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-down-right.svg)
 */
const SquareDownRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM112 200c0-5.1 2-10 5.7-13.7l36.7-36.7c3.6-3.6 8.5-5.7 13.7-5.7s10 2 13.7 5.7L248 216l33.4-33.4c4.2-4.2 10-6.6 16-6.6c12.5 0 22.6 10.1 22.6 22.6L320 336c0 8.8-7.2 16-16 16l-137.4 0c-12.5 0-22.6-10.1-22.6-22.6c0-6 2.4-11.8 6.6-16L184 280l-66.3-66.3C114 210 112 205.1 112 200z" />
        <path d="M320 336l0-137.4c0-12.5-10.1-22.6-22.6-22.6c-6 0-11.8 2.4-16 6.6L248 216l-66.3-66.3C178 146 173.1 144 168 144s-10 2-13.7 5.7l-36.7 36.7C114 190 112 194.9 112 200s2 10 5.7 13.7L184 280l-33.4 33.4c-4.2 4.2-6.6 10-6.6 16c0 12.5 10.1 22.6 22.6 22.6L304 352c8.8 0 16-7.2 16-16z" />
    </Icon>
);

export default SquareDownRight;