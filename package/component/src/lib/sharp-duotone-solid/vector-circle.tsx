
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vector-circle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-circle?s=sharp-duotone-solid vector-circle}
 * @preview ![vector-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vector-circle.svg)
 */
const VectorCircle: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M41.3 192C62.8 119.8 119.8 62.8 192 41.3c0 2.2 0 4.5 0 6.7l0 32 0 29.3c-36.9 16.1-66.6 45.8-82.7 82.7L80 192l-32 0-6.7 0zm0 128l6.7 0 32 0 16 0 13.3 0c16.1 36.9 45.8 66.6 82.7 82.7l0 29.3 0 32 0 6.7C119.8 449.2 62.8 392.2 41.3 320zM320 41.3C392.2 62.8 449.2 119.8 470.7 192c-2.2 0-4.5 0-6.7 0l-32 0-29.3 0c-16.1-36.9-45.8-66.6-82.7-82.7L320 96l0-16 0-32 0-6.7zm0 361.4c36.9-16.1 66.6-45.8 82.7-82.7l13.3 0 16 0 32 0 6.7 0C449.2 392.2 392.2 449.2 320 470.7l0-6.7 0-32 0-16 0-13.3z" />
        <path d="M240 48l0 32 32 0 0-32-32 0zM192 0l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48zM48 240l0 32 32 0 0-32-32 0zM0 192l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0L0 320l0-48 0-32 0-48zM272 432l-32 0 0 32 32 0 0-32zm-32-48l32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48 48 0zM432 240l0 32 32 0 0-32-32 0zm-48-48l48 0 32 0 48 0 0 48 0 32 0 48-48 0-32 0-48 0 0-48 0-32 0-48z" />
    </Icon>
);

export default VectorCircle;