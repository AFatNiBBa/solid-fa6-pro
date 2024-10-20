
import { Icon } from "../../index";

/**
 * A component that renders the `chimney` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chimney?s=light chimney}
 * @preview ![chimney](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/chimney.svg)
 */
const Chimney: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M32 64l384 0 0 64-16 0-224 0L48 128l-16 0 0-64zm0 96l0 112 0 128 0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 96 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48 80 0 112 0 0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64 0-128 0-112c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32zm352 0l0 96-112 0-80 0 0-96 192 0zm-224 0l0 96-96 0 0-96 96 0zm16 224L64 384l0-96 112 0 80 0 0 96-80 0zm112 0l0-96 96 0 0 96-96 0z" />
    </Icon>
);

export default Chimney;