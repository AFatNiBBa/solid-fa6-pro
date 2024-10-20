
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-binary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-binary?s=sharp-duotone-solid laptop-binary}
 * @preview ![laptop-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/laptop-binary.svg)
 */
const LaptopBinary: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384l0 48 48 48 544 0 48-48 0-48L0 384zM64 32l0 32 0 288 64 0 0-256 384 0 0 256 64 0 0-288 0-32-32 0L96 32 64 32z" />
        <path d="M512 96L128 96l0 256 64 0 0-48-16 0 0-32 16 0 16 0 16 0 0 16 0 64 48 0 0-64 0-16 16 0 64 0 16 0 0 16 0 64 48 0 0-48-16 0 0-32 16 0 16 0 16 0 0 16 0 64 64 0 0-256zM336 352l0-48-32 0 0 48 32 0zM160 128l16 0 64 0 16 0 0 16 0 80 0 16-16 0-64 0-16 0 0-16 0-80 0-16zm32 32l0 48 32 0 0-48-32 0zm96-32l16 0 16 0 16 0 0 16 0 80 0 16-32 0 0-16 0-64-16 0 0-32zm112 0l64 0 16 0 0 16 0 80 0 16-16 0-64 0-16 0 0-16 0-80 0-16 16 0zm16 80l32 0 0-48-32 0 0 48z" />
    </Icon>
);

export default LaptopBinary;