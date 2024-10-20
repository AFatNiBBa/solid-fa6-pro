
import { Icon } from "../../index";

/**
 * A component that renders the `tennis-ball` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tennis-ball?s=sharp-regular tennis-ball}
 * @preview ![tennis-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/tennis-ball.svg)
 */
const TennisBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 463.8c0-55.2 21.1-110.4 63.3-152.6s97.4-63.2 152.6-63.3C459.7 139.5 372.5 52.3 264 48.2c0 55.2-21.1 110.4-63.3 152.6S103.4 264 48.2 264C52.3 372.5 139.5 459.7 248 463.8zm48-3.7C378.8 444 444 378.8 460.2 296c-41.7 1-83.1 17.3-114.9 49.2S297 418.4 296 460.2zM51.9 216c41.7-1 83.1-17.3 114.9-49.2S215 93.6 216 51.9C133.2 68 68 133.2 51.9 216zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default TennisBall;