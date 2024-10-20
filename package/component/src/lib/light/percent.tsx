
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=light percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96A64 64 0 1 0 64 64a64 64 0 1 0 0 128zM320 352a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128zM379.3 91.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-352 352c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l352-352z" />
    </Icon>
);

export default Percent;