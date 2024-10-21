
import { Icon, generic } from "../../index";

/**
 * A component that renders the `border-outer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/border-outer?s=sharp-duotone-solid border-outer}
 * @preview ![border-outer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/border-outer.svg)
 */
const BorderOuter: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 224l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm96-96l64 0 0 64-64 0 0-64z" />
        <path d="M384 96l0 320L64 416 64 96l320 0zM64 32L0 32 0 96 0 416l0 64 64 0 320 0 64 0 0-64 0-320 0-64-64 0L64 32z" />
    </Icon>
);

export default BorderOuter;