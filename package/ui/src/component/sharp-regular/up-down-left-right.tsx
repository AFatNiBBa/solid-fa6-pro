
import { Icon } from "../../index";

/**
 * A component that renders the `up-down-left-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down-left-right?s=sharp-regular up-down-left-right}
 * @preview ![up-down-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-down-left-right.svg)
 */
const UpDownLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 144l0-48 62.1-62.1L256 0l33.9 33.9L352 96l0 48-48 0-24 0 0 88 88 0 0-24 0-48 48 0 62.1 62.1L512 256l-33.9 33.9L416 352l-48 0 0-48 0-24-88 0 0 88 24 0 48 0 0 48-62.1 62.1L256 512l-33.9-33.9L160 416l0-48 48 0 24 0 0-88-88 0 0 24 0 48-48 0L33.9 289.9 0 256l33.9-33.9L96 160l48 0 0 48 0 24 88 0 0-88-24 0-48 0zM284.1 96L256 67.9 227.9 96l56.2 0zM67.9 256L96 284.1l0-56.2L67.9 256zM284.1 416l-56.2 0L256 444.1 284.1 416zm160-160L416 227.9l0 56.2L444.1 256z" />
    </Icon>
);

export default UpDownLeftRight;