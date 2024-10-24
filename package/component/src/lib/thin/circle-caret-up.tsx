
import { Icon } from "../../index";

/**
 * A component that renders the `circle-caret-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-caret-up?s=thin circle-caret-up}
 * @preview ![circle-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-caret-up.svg)
 */
const CircleCaretUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-352c-7.3 0-14.3 3-19.3 8.4L134.8 277.6c-4.4 4.7-6.8 10.8-6.8 17.2c0 13.9 11.3 25.2 25.2 25.2l205.6 0c13.9 0 25.2-11.3 25.2-25.2c0-6.4-2.4-12.5-6.8-17.2L275.3 168.4c-5-5.4-12-8.4-19.3-8.4zm-7.6 19.3c2-2.1 4.7-3.3 7.6-3.3s5.6 1.2 7.6 3.3L365.5 288.5c1.6 1.7 2.5 4 2.5 6.3c0 5.1-4.1 9.2-9.2 9.2l-205.6 0c-5.1 0-9.2-4.1-9.2-9.2c0-2.3 .9-4.6 2.5-6.3L248.4 179.3z" />
    </Icon>
);

export default CircleCaretUp;