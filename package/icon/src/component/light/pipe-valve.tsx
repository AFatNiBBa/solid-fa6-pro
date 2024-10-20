
import { Icon } from "../../index";

/**
 * A component that renders the `pipe-valve` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-valve?s=light pipe-valve}
 * @preview ![pipe-valve](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pipe-valve.svg)
 */
const PipeValve: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 80L32 192l0-16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 32L0 432l0 32c0 8.8 7.2 16 16 16s16-7.2 16-16l0-16 448 0 0 16c0 8.8 7.2 16 16 16s16-7.2 16-16l0-32 0-224 0-32c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16-208 0 0-80 96 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-48zM256 224l224 0 0 192L32 416l0-192 224 0z" />
    </Icon>
);

export default PipeValve;