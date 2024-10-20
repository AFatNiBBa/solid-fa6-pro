
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baseball-bat-ball` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baseball-bat-ball?s=sharp-duotone-solid baseball-bat-ball}
 * @preview ![baseball-bat-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/baseball-bat-ball.svg)
 */
const BaseballBatBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M55.3 405.4c17.1 17.1 34.2 34.2 51.3 51.3l51.9-51.9c9.6-9.6 20.3-18.2 31.9-25.5c9.2-5.8 18.4-11.6 27.6-17.4c-22.6-22.6-45.2-45.2-67.9-67.9c-5.8 9.2-11.6 18.4-17.4 27.6c-7.3 11.5-15.8 22.2-25.5 31.9L55.3 405.4zM352 432a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M408.9 7.1l-5.7-5.7-5.7 5.7L233.5 171.2c-10.5 10.5-19.8 22.1-27.7 34.6l-55.7 88.2 67.9 67.9 88.2-55.7c12.5-7.9 24.1-17.2 34.6-27.7L504.9 114.5l5.7-5.7-5.7-5.7-96-96zM50.9 401l-17-17L0 417.9l17 17 60.2 60.2 17 17L128 478.1l-17-17L50.9 401z" />
    </Icon>
);

export default BaseballBatBall;