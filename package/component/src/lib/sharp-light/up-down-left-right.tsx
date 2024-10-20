
import { Icon } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=sharp-light up-down-left-right}
 * @preview ![up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up-down-left-right.svg)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 128l0-32 73.4-73.4L256 0l22.6 22.6L352 96l0 32-32 0-48 0 0 112 112 0 0-48 0-32 32 0 73.4 73.4L512 256l-22.6 22.6L416 352l-32 0 0-32 0-48-112 0 0 112 48 0 32 0 0 32-73.4 73.4L256 512l-22.6-22.6L160 416l0-32 32 0 48 0 0-112-112 0 0 48 0 32-32 0L22.6 278.6 0 256l22.6-22.6L96 160l32 0 0 32 0 48 112 0 0-112-48 0-32 0zM306.7 96L256 45.3 205.3 96l101.5 0zM45.3 256L96 306.7l0-101.5L45.3 256zM306.7 416l-101.5 0L256 466.7 306.7 416zm160-160L416 205.3l0 101.5L466.7 256z" />
    </Icon>
);

export default UpDownLeftRight;