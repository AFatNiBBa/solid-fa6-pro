
import { Icon } from "../../index";

/**
 * A component that renders the `shield-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-check?s=thin shield-check}
 * @preview ![shield-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shield-check.svg)
 */
const ShieldCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M237.3 22.6c12-5.1 25.5-5.1 37.5 0l176.7 75c16.6 7.1 28.6 23.2 28.5 42.4c-.5 96.6-40.3 270.2-204.5 348.8c-12.3 5.9-26.7 5.9-39 0C72.3 410.1 32.5 236.5 32 139.9c-.1-19.1 11.9-35.3 28.5-42.4l176.7-75zM281 7.8c-16-6.8-34-6.8-50 0L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.8 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L281 7.8zm76.6 189.8c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L224 308.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l128-128z" />
    </Icon>
);

export default ShieldCheck;