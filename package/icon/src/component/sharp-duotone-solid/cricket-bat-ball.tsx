
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cricket-bat-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cricket-bat-ball?s=sharp-duotone-solid cricket-bat-ball}
 * @preview ![cricket-bat-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cricket-bat-ball.svg)
 */
const CricketBatBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M.2 349.8C-.2 367.1 .6 384 3.8 401c4 21.4 13.1 51.4 35.2 71.9c20.6 22.1 50.6 31.2 71.9 35.2c17 3.2 34 4 51.2 3.6C226.1 447.8 290 383.9 353.9 320c-48.7 0-97.3 0-145.9 0c-5.3 0-10.7 0-16 0c0-5.3 0-10.7 0-16c0-48.7 0-97.3 0-145.9L.2 349.8zM224 126.1c0 54 0 108 0 161.9c54 0 108 0 161.9 0c13.3-13.3 26.7-26.7 40-40c-19.4-19.4-38.9-38.9-58.3-58.3c-15.1-15.1-30.2-30.2-45.3-45.3L264 86.1c-13.3 13.3-26.7 26.7-40 40z" />
        <path d="M509.3 48L486.6 70.6l-119 119-45.3-45.3 119-119L464 2.7 509.3 48zM385.9 288l-32 32L208 320l-16 0 0-16 0-145.9 32-32L224 288l161.9 0zM352 432a80 80 0 1 1 160 0 80 80 0 1 1 -160 0z" />
    </Icon>
);

export default CricketBatBall;