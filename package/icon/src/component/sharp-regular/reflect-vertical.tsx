
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-vertical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-vertical?s=sharp-regular reflect-vertical}
 * @preview ![reflect-vertical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/reflect-vertical.svg)
 */
const ReflectVertical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 232l24 0 464 0 24 0 0 48-24 0L24 280 0 280l0-48zM222.1 353.9L256 320l33.9 33.9L400 464l16 16 0 32-32 0-3.9 0L368 512l-224 0-12.1 0-3.9 0-32 0 0-32 16-16L222.1 353.9zM332.1 464L256 387.9 179.9 464l152.2 0zM256 192l-33.9-33.9L112 48 96 32 96 0l32 0 3.9 0L144 0 368 0l12.1 0L384 0l32 0 0 32L400 48 289.9 158.1 256 192zm0-67.9L332.1 48 179.9 48 256 124.1z" />
    </Icon>
);

export default ReflectVertical;