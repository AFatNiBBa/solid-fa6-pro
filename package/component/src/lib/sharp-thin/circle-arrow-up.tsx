
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=sharp-thin circle-arrow-up}
 * @preview ![circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-arrow-up.svg)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm5.7-381.7l-5.7-5.7-5.7 5.7-104 104-5.7 5.7L152 251.3l5.7-5.7L248 155.3 248 376l0 8 16 0 0-8 0-220.7 90.3 90.3 5.7 5.7L371.3 240l-5.7-5.7-104-104z" />
    </Icon>
);

export default CircleArrowUp;