
import { Icon } from "../../index";

/**
 * A component that renders the `boxes-stacked` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/boxes-stacked?s=sharp-regular boxes-stacked}
 * @preview ![boxes-stacked](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/boxes-stacked.svg)
 */
const BoxesStacked: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M400 48l0 144 48 0 0-144 0-48L400 0 176 0 128 0l0 48 0 144 48 0 0-144 72 0 0 80 80 0 0-80 72 0zM352 512l176 0 48 0 0-48 0-192 0-48-48 0-176 0 0 48 24 0 0 80 80 0 0-80 72 0 0 192-176 0 0 48zM272 272l0 192L48 464l0-192 72 0 0 80 80 0 0-80 72 0zM48 224L0 224l0 48L0 464l0 48 48 0 224 0 48 0 0-48 0-192 0-48-48 0L48 224z" />
    </Icon>
);

export default BoxesStacked;