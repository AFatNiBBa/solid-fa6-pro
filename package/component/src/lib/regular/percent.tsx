
import { Icon } from "../../index";

/**
 * A component that renders the `percent` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/percent?s=regular percent}
 * @preview ![percent](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/percent.svg)
 */
const Percent: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M369 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 399c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L369 113zM112 128a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM368 384a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z" />
    </Icon>
);

export default Percent;