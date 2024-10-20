
import { Icon } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=sharp-regular rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 80L432 16l-96 0C159.3 16 16 159.3 16 336l0 96 64 64 96 0c176.7 0 320-143.3 320-320l0-96zM343.7 64L235.3 116.4 116.4 235.3 64 343.7c0-67.1 20.4-131.3 64-183c9.8-11.6 20.5-22.3 32-32.1C211.8 84.6 276.3 64 343.7 64zM86.2 434.3l-8.6-8.6 78.4-162.3L263.5 156.1 425.8 77.7l8.6 8.6L355.9 248.5 248.5 355.9 86.2 434.3zM168.3 448l108.4-52.4L395.6 276.7 448 168.3c0 67.4-20.6 131.9-64.6 183.7c-9.6 11.3-20.1 21.8-31.4 31.4c-51.8 44-116.3 64.6-183.7 64.6z" />
    </Icon>
);

export default RugbyBall;