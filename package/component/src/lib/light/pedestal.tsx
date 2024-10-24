
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=light pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 32L96 32C78.3 32 64 46.3 64 64l0 384-32 0L32 64C32 28.7 60.7 0 96 0L352 0c35.3 0 64 28.7 64 64l0 384-32 0 0-384c0-17.7-14.3-32-32-32zM16 480l416 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16zM112 96a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM320 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Pedestal;