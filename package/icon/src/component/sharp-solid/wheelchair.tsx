
import { Icon } from "../../index";

/**
 * A component that renders the `wheelchair` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wheelchair?s=sharp-solid wheelchair}
 * @preview ![wheelchair](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/wheelchair.svg)
 */
const Wheelchair: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM48 352c0 61.9 50.1 112 112 112c49.9 0 92.3-32.7 106.7-77.8l45.7 14.6C291.8 465.3 231.4 512 160 512C71.6 512 0 440.4 0 352c0-78.3 56.3-143.5 130.6-157.3l8.8 47.2C87.4 251.5 48 297.2 48 352zM153 128l39 0 32 0 26.2 0 5.1 25.7 4.5 22.3 76.2 0 32 0 0 64-32 0-63.4 0 9.6 48L384 288l22.2 0 7.8 20.8 37.1 99 10.7-3.6 30.3-10.2 20.5 60.6-30.3 10.2-40 13.5-29.3 9.9-10.9-29L361.8 352l-105.2 0c-.4 0-.8 0-1.3 0L224 352l-26.2 0-5.1-25.7-32-160L153 128z" />
    </Icon>
);

export default Wheelchair;