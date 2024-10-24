
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=sharp-regular reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 0l0 24 0 464 0 24-48 0 0-24 0-464 0-24 48 0zM158.1 222.1L192 256l-33.9 33.9L48 400 32 416 0 416l0-32 0-3.9L0 368 0 144l0-12.1L0 128 0 96l32 0 16 16L158.1 222.1zM48 332.1L124.1 256 48 179.9l0 152.2zM320 256l33.9-33.9L464 112l16-16 32 0 0 32 0 3.9 0 12.1 0 224 0 12.1 0 3.9 0 32-32 0-16-16L353.9 289.9 320 256zm67.9 0L464 332.1l0-152.2L387.9 256z" />
    </Icon>
);

export default ReflectHorizontal;