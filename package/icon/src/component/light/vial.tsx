
import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=light vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M292.7 4.7c6.2-6.2 16.4-6.2 22.6 0l32 32 128 128 32 32c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L464 198.6l-84.7 84.7L181.8 480.8c-20 20-47.1 31.2-75.3 31.2C47.7 512 0 464.3 0 405.5c0-28.2 11.2-55.3 31.2-75.3l69.5-69.5L313.4 48 292.7 27.3c-6.2-6.2-6.2-16.4 0-22.6zM336 70.6L150.6 256l210.7 0 80-80L336 70.6zM329.4 288l-210.7 0L53.8 352.8c-14 14-21.8 32.9-21.8 52.7c0 41.1 33.4 74.5 74.5 74.5c19.8 0 38.7-7.8 52.7-21.8L329.4 288z" />
    </Icon>
);

export default Vial;