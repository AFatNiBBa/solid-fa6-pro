
import { Icon } from "../../index";

/**
 * A component that renders the `pedestal` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pedestal?s=solid pedestal}
 * @preview ![pedestal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pedestal.svg)
 */
const Pedestal: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 0C60.7 0 32 28.7 32 64l0 352 384 0 0-352c0-35.3-28.7-64-64-64L96 0zm24 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM304 88a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L32 448z" />
    </Icon>
);

export default Pedestal;