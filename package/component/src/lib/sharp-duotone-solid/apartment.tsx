
import { Icon, generic } from "../../index";

/**
 * A component that renders the `apartment` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/apartment?s=sharp-duotone-solid apartment}
 * @preview ![apartment](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/apartment.svg)
 */
const Apartment: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 512l128 0 32 0 96 0 0-128 64 0 0 128 96 0 32 0 128 0 0-320-128 0L448 0 128 0l0 96L0 96zm64 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM192 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM320 64l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm128 0l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M384 64l-64 0 0 64 64 0 0-64zM64 320l64 0 0-64-64 0 0 64zm320 0l0-64-64 0 0 64 64 0zm128 96l0-64-64 0 0 64 64 0zm-384 0l0-64-64 0 0 64 64 0zm64-96l64 0 0-64-64 0 0 64zm0-256l0 64 64 0 0-64-64 0zM384 224l0-64-64 0 0 64 64 0zm64 96l64 0 0-64-64 0 0 64zM128 224l0-64-64 0 0 64 64 0zm64 0l64 0 0-64-64 0 0 64z" />
    </Icon>
);

export default Apartment;