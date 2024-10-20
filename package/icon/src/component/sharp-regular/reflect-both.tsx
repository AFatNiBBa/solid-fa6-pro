
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-both` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-both?s=sharp-regular reflect-both}
 * @preview ![reflect-both](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reflect-both.svg)
 */
const ReflectBoth: typeof Icon = x => (
    <Icon {...x}>
        <path d="M289.9 158.1L256 192l-33.9-33.9L112 48 96 32 96 0l32 0 3.9 0L144 0 368 0l12.1 0L384 0l32 0 0 32L400 48 289.9 158.1zM332.1 48L179.9 48 256 124.1 332.1 48zM192 256l-33.9 33.9L48 400 32 416 0 416l0-32 0-3.9L0 368 0 144l0-12.1L0 128 0 96l32 0 16 16L158.1 222.1 192 256zm-67.9 0L48 179.9l0 152.2L124.1 256zM320 256l33.9-33.9L464 112l16-16 32 0 0 32 0 3.9 0 12.1 0 224 0 12.1 0 3.9 0 32-32 0-16-16L353.9 289.9 320 256zm67.9 0L464 332.1l0-152.2L387.9 256zM256 320l33.9 33.9L400 464l16 16 0 32-32 0-3.9 0L368 512l-224 0-12.1 0-3.9 0-32 0 0-32 16-16L222.1 353.9 256 320zm0 67.9L179.9 464l152.2 0L256 387.9z" />
    </Icon>
);

export default ReflectBoth;