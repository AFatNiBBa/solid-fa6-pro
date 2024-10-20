
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-up-right?s=duotone square-up-right}
 * @preview ![square-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-up-right.svg)
 */
const SquareUpRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zM112 312c0-5.1 2-10 5.7-13.7L184 232l-33.4-33.4c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6L304 160c8.8 0 16 7.2 16 16l0 137.4c0 12.5-10.1 22.6-22.6 22.6c-6 0-11.8-2.4-16-6.6L248 296l-66.3 66.3C178 366 173.1 368 168 368s-10-2-13.7-5.7l-36.7-36.7C114 322 112 317.1 112 312z" />
        <path d="M320 176l0 137.4c0 12.5-10.1 22.6-22.6 22.6c-6 0-11.8-2.4-16-6.6L248 296l-66.3 66.3C178 366 173.1 368 168 368s-10-2-13.7-5.7l-36.7-36.7C114 322 112 317.1 112 312s2-10 5.7-13.7L184 232l-33.4-33.4c-4.2-4.2-6.6-10-6.6-16c0-12.5 10.1-22.6 22.6-22.6L304 160c8.8 0 16 7.2 16 16z" />
    </Icon>
);

export default SquareUpRight;