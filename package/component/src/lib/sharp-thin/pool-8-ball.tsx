
import { Icon } from "../../index";

/**
 * A component that renders the `pool-8-ball` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pool-8-ball?s=sharp-thin pool-8-ball}
 * @preview ![pool-8-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pool-8-ball.svg)
 */
const Pool_8Ball: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256A240 240 0 1 0 16 256a240 240 0 1 0 480 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm384-64a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-32a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm26 6.4c17.8 9.4 30 28.1 30 49.6c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-21.5 12.2-40.2 30-49.6c-8.6-7.3-14-18.2-14-30.4c0-22.1 17.9-40 40-40s40 17.9 40 40c0 12.2-5.4 23.1-14 30.4zM256 176a40 40 0 1 0 0 80 40 40 0 1 0 0-80z" />
    </Icon>
);

export default Pool_8Ball;