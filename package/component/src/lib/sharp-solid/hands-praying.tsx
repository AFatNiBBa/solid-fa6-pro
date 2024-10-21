
import { Icon } from "../../index";

/**
 * A component that renders the `hands-praying` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hands-praying?s=sharp-solid hands-praying}
 * @preview ![hands-praying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hands-praying.svg)
 */
const HandsPraying: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M117 206.8L245 6.8l55 32.6L208 208.2 208 320l32 0 0-112 64 0 0 112 0 112L48 512 0 512 0 368l112-42 0-102 0-9.4 5-7.9zm405.9 0l5 7.9 0 9.4 0 102 112 42 0 144-48 0L336 432l0-112 0-112 64 0 0 112 32 0 0-111.8L339.9 39.3 395 6.8l128 200z" />
    </Icon>
);

export default HandsPraying;