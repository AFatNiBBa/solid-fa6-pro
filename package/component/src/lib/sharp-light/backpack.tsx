
import { Icon } from "../../index";

/**
 * A component that renders the `backpack` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backpack?s=sharp-light backpack}
 * @preview ![backpack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/backpack.svg)
 */
const Backpack: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 0l16 0L288 0l16 0 0 16 0 48 16 0c70.7 0 128 57.3 128 128l0 288 0 32-32 0L32 512 0 512l0-32L0 192C0 121.3 57.3 64 128 64l16 0 0-48 0-16zM272 32l-96 0 0 32 96 0 0-32zM32 192l0 288 48 0 0-112 0-96 0-16 16 0 256 0 16 0 0 16 0 96 0 112 48 0 0-288c0-53-43-96-96-96l-32 0L160 96l-32 0c-53 0-96 43-96 96zm80 288l224 0 0-96-224 0 0 96zm32-320l160 0 16 0 0 32-16 0-160 0-16 0 0-32 16 0zM336 352l0-64-224 0 0 64 224 0z" />
    </Icon>
);

export default Backpack;