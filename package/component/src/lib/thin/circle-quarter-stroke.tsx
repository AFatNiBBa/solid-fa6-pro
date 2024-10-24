
import { Icon } from "../../index";

/**
 * A component that renders the `circle-quarter-stroke` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-quarter-stroke?s=thin circle-quarter-stroke}
 * @preview ![circle-quarter-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-quarter-stroke.svg)
 */
const CircleQuarterStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M496 256C496 123.5 388.5 16 256 16l0 184c0 22.1-17.9 40-40 40L16.5 240c-.3 5.3-.5 10.6-.5 16c0 132.5 107.5 240 240 240s240-107.5 240-240zM240 16.5C125.6 24.1 33.1 111.8 18.1 224L216 224c13.3 0 24-10.7 24-24l0-183.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleQuarterStroke;