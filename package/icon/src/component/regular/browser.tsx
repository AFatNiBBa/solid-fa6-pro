
import { Icon } from "../../index";

/**
 * A component that renders the `browser` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/browser?s=regular browser}
 * @preview ![browser](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/browser.svg)
 */
const Browser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M.3 89.5C.1 91.6 0 93.8 0 96l0 64L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256 0-64c0-35.3-28.7-64-64-64L64 32c-2.2 0-4.4 .1-6.5 .3c-9.2 .9-17.8 3.8-25.5 8.2C21.8 46.5 13.4 55.1 7.7 65.5c-3.9 7.3-6.5 15.4-7.4 24zM48 160l416 0 0 256c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-256z" />
    </Icon>
);

export default Browser;