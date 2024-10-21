
import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=sharp-light vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M312 1.4l11.3 11.3 24 24 128 128 24 24L510.6 200 488 222.6l-11.3-11.3L464 198.6l-84.7 84.7L181.8 480.8c-20 20-47.1 31.2-75.3 31.2C47.7 512 0 464.3 0 405.5c0-28.2 11.2-55.3 31.2-75.3l69.5-69.5L313.4 48 300.7 35.3 289.4 24 312 1.4zm24 69.3L150.6 256l210.7 0 80-80L336 70.6zM329.4 288l-210.7 0L53.8 352.8c-14 14-21.8 32.9-21.8 52.7c0 41.1 33.4 74.5 74.5 74.5c19.8 0 38.7-7.8 52.7-21.8L329.4 288z" />
    </Icon>
);

export default Vial;