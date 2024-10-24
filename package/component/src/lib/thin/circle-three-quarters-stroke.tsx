
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=thin circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-three-quarters-stroke.svg)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.5 272L280 272c-22.1 0-40-17.9-40-40l0-215.5C114.9 24.8 16 128.8 16 256c0 132.5 107.5 240 240 240c127.2 0 231.2-98.9 239.5-224zm.5-16C496 123.5 388.5 16 256 16l0 216c0 13.3 10.7 24 24 24l216 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleThreeQuartersStroke;