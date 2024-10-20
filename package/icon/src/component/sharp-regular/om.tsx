
import { Icon } from "../../index";

/**
 * A component that renders the `om` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/om?s=sharp-regular om}
 * @preview ![om](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/om.svg)
 */
const Om: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 0L336 32l32 32 32-32L368 0zm24 200l-9.9 0-7 7-57 57-86.4 0C242 247.8 248 228.6 248 208c0-57.4-46.6-104-104-104c-23.4 0-45 7.7-62.4 20.8l28.8 38.4c9.4-7 21-11.2 33.6-11.2c30.9 0 56 25.1 56 56s-25.1 56-56 56l-56 0 24 48 32 0 12 0c42 0 76 34 76 76c0 41.5-33.2 75.2-74.5 76C47.5 462.6 16 368 16 368s-15.7 141.6 140 144c0 0 0 0 0 0c.5 0 1.1 0 1.6 0c.8 0 1.6 0 2.4 0c0 0 0 0 0-.1c66.6-2.1 120-56.8 120-123.9c0-28.6-9.7-55-26-76l74 0 9.9 0 7-7 57-57 22.1 0c22.1 0 40 17.9 40 40l0 112c0 17.7-14.3 32-32 32c-64 0-80-48-80-48l0 48s0 48 80 48c44.2 0 80-35.8 80-80l0-112c0-48.6-39.4-88-88-88l-32 0zm88-88l0-48s-66.5 32-112 32s-112-32-112-32s16 80 120 80c72 0 104-32 104-32z" />
    </Icon>
);

export default Om;