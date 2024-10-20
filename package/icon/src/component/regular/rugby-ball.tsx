
import { Icon } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=regular rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 16l32 0c70.7 0 128 57.3 128 128l0 32c0 176.7-143.3 320-320 320l-32 0C73.3 496 16 438.7 16 368l0-32C16 159.3 159.3 16 336 16zM308.5 65.4C252.1 71 200.9 93.9 160 128.6c-11.5 9.8-22.2 20.5-32 32.1c-34.8 41.3-57.6 93.1-62.8 150C88.5 266 125.5 216.6 172 170c45.1-45.1 92.9-81.2 136.4-104.6zm-108 381.5c57.2-5.1 109.3-27.9 150.8-62.9c11.6-9.8 22.3-20.5 32.1-32c34.9-41.1 57.8-92.6 63.3-149.3c-23.4 43.7-59.7 91.7-105 137c-46.8 46.8-96.4 83.9-141.3 107.2zM90.4 421.4c2.7 2.7 8.8 5.9 22.3 5c13.4-.9 31.2-5.8 52.5-15.6c42.3-19.4 93.5-55.8 142.7-105s85.6-100.4 105-142.7c9.8-21.2 14.7-39 15.6-52.5c.9-13.5-2.3-19.6-5-22.3s-8.8-5.9-22.3-5c-13.4 .9-31.2 5.8-52.5 15.6c-42.3 19.5-93.5 55.8-142.7 105s-85.6 100.4-105 142.7c-9.8 21.2-14.7 39-15.6 52.5c-.9 13.5 2.3 19.6 5 22.3z" />
    </Icon>
);

export default RugbyBall;