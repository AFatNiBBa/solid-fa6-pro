
import { Icon } from "../../index";

/**
 * A component that renders the `road` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road?s=sharp-thin road}
 * @preview ![road](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/road.svg)
 */
const Road: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M21.2 464L280 464l0-56 0-8 16 0 0 8 0 56 258.8 0L435.9 48 296 48l0 56 0 8-16 0 0-8 0-56L140.1 48 21.2 464zM128 32l320 0L571.4 464l4.6 16-16.6 0L16.6 480 0 480l4.6-16L128 32zM296 200l0 112 0 8-16 0 0-8 0-112 0-8 16 0 0 8z" />
    </Icon>
);

export default Road;