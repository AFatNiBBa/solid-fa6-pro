
import { Icon } from "../../index";

/**
 * A component that renders the `shield` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield?s=thin shield}
 * @preview ![shield](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/shield.svg)
 */
const Shield: typeof Icon = x => (
    <Icon {...x}>
        <path d="M274.8 22.6c-12-5.1-25.5-5.1-37.5 0L60.5 97.5c-16.6 7.1-28.6 23.2-28.5 42.4c.5 96.6 40.3 270.2 204.6 348.8c12.3 5.9 26.7 5.9 39 0c164.2-78.6 204-252.2 204.5-348.8c.1-19.1-11.9-35.3-28.5-42.4l-176.7-75zM231 7.8c16-6.8 34-6.8 50 0l176.7 75c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L231 7.8z" />
    </Icon>
);

export default Shield;