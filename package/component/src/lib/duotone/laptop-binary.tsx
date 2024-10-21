
import { Icon, generic } from "../../index";

/**
 * A component that renders the `laptop-binary` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/laptop-binary?s=duotone laptop-binary}
 * @preview ![laptop-binary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/laptop-binary.svg)
 */
const LaptopBinary: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 403.2C0 445.6 34.4 480 76.8 480l486.4 0c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2L19.2 384C8.6 384 0 392.6 0 403.2zM64 96l0 256 64 0 0-256 384 0 0 256 64 0 0-256c0-35.3-28.7-64-64-64L128 32C92.7 32 64 60.7 64 96z" />
        <path d="M512 96L128 96l0 256 64 0 0-48c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 64 48 0 0-40c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 40 48 0 0-48c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 64 64 0 0-256zM336 352l0-40c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8l0 40 32 0zM160 168c0-22.1 17.9-40 40-40l16 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-32zm40-8c-4.4 0-8 3.6-8 8l0 32c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-16 0zm88-16c0-8.8 7.2-16 16-16l16 0c8.8 0 16 7.2 16 16l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c-8.8 0-16-7.2-16-16zm136-16l16 0c22.1 0 40 17.9 40 40l0 32c0 22.1-17.9 40-40 40l-16 0c-22.1 0-40-17.9-40-40l0-32c0-22.1 17.9-40 40-40zm-8 40l0 32c0 4.4 3.6 8 8 8l16 0c4.4 0 8-3.6 8-8l0-32c0-4.4-3.6-8-8-8l-16 0c-4.4 0-8 3.6-8 8z" />
    </Icon>
);

export default LaptopBinary;