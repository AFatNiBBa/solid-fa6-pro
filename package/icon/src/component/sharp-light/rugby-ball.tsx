
import { Icon } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=sharp-light rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 48l59.2 0L242.4 121.8 240 123l-1.9 1.9L124.9 238.1 123 240l-1.2 2.4L48 395.2 48 336C48 176.9 176.9 48 336 48zM77 447.7L64.3 435l85.2-176.3L258.8 149.5 435 64.3 447.7 77 362.5 253.2 253.2 362.5 77 447.7zM116.8 464l152.8-73.8L272 389l1.9-1.9L387.1 273.9 389 272l1.2-2.4L464 116.8l0 59.2c0 159.1-128.9 288-288 288l-59.2 0zM496 80L432 16l-96 0C159.3 16 16 159.3 16 336l0 96 64 64 96 0c176.7 0 320-143.3 320-320l0-96z" />
    </Icon>
);

export default RugbyBall;