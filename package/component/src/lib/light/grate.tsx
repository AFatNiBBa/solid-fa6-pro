
import { Icon } from "../../index";

/**
 * A component that renders the `grate` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grate?s=light grate}
 * @preview ![grate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/grate.svg)
 */
const Grate: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm96 0l56 0 72 0 72 0 56 0c17.7 0 32 14.3 32 32l0 128 0 128c0 17.7-14.3 32-32 32l-56 0-72 0-72 0-56 0c-17.7 0-32-14.3-32-32l0-128 0-128c0-17.7 14.3-32 32-32zm0 32l0 112 40 0 0-112-40 0zm72 112l40 0 0-112-40 0 0 112zm72 0l40 0 0-112-40 0 0 112zm72 0l40 0 0-112-40 0 0 112zm0 32l0 112 40 0 0-112-40 0zm-32 0l-40 0 0 112 40 0 0-112zm-72 0l-40 0 0 112 40 0 0-112zm-72 0l-40 0 0 112 40 0 0-112z" />
    </Icon>
);

export default Grate;