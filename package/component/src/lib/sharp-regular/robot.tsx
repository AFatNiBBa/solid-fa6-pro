
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=sharp-regular robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 24l0-24L296 0l0 24 0 72L144 96 96 96l0 48 0 320 0 48 48 0 352 0 48 0 0-48 0-320 0-48-48 0L344 96l0-72zM296 144l48 0 152 0 0 320-352 0 0-320 152 0zM64 224L0 224 0 416l64 0 0-192zm576 0l-64 0 0 192 64 0 0-192zM192 384l0 32 16 0 32 0 16 0 0-32-16 0-32 0-16 0zm144 0l-32 0-16 0 0 32 16 0 32 0 16 0 0-32-16 0zm64 0l-16 0 0 32 16 0 32 0 16 0 0-32-16 0-32 0zM280 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm120 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
    </Icon>
);

export default Robot;