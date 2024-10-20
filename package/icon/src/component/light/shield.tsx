
import { Icon } from "../../index";

/**
 * A component that renders the `shield` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=light shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path d="M268.5 37.3c-8-3.4-17-3.4-25 0l-176.7 75C55.5 117 47.9 127.7 48 139.8c.5 94 39.3 259.8 195.4 334.5c7.9 3.8 17.2 3.8 25.1 0c156.1-74.7 195-240.4 195.5-334.5c.1-12.1-7.5-22.8-18.8-27.6l-176.7-75zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L231 7.8z" />
    </Icon>
);

export default Shield;