
import { Icon } from "../../index";

/**
 * A component that renders the `square-dashed` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-dashed?s=solid square-dashed}
 * @preview ![square-dashed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/square-dashed.svg)
 */
const SquareDashed: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 32l32 0 0 64L96 96c-17.7 0-32 14.3-32 32l0 32L0 160l0-32C0 75 43 32 96 32zM0 192l64 0 0 128L0 320 0 192zm384 0l64 0 0 128-64 0 0-128zm64-32l-64 0 0-32c0-17.7-14.3-32-32-32l-32 0 0-64 32 0c53 0 96 43 96 96l0 32zm0 192l0 32c0 53-43 96-96 96l-32 0 0-64 32 0c17.7 0 32-14.3 32-32l0-32 64 0zM64 352l0 32c0 17.7 14.3 32 32 32l32 0 0 64-32 0c-53 0-96-43-96-96l0-32 64 0zm96 128l0-64 128 0 0 64-128 0zm0-384l0-64 128 0 0 64L160 96z" />
    </Icon>
);

export default SquareDashed;