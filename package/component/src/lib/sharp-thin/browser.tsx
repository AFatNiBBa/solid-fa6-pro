
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=sharp-thin browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 48l0 48 0 48 368 0 0-96L128 48zm-16 0L16 48l0 96 96 0 0-48 0-48zM16 160l0 304 480 0 0-304-376 0L16 160zM0 32l16 0 480 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32z" />
    </Icon>
);

export default Browser;