
import { Icon } from "../../index";

/**
 * A component that renders the `car` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car?s=sharp-thin car}
 * @preview ![car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/car.svg)
 */
const Car: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 32l-6 0-1.7 5.7L58 192l-42 0L0 192l0 16L0 384l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 320 0 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16 0-176 0-16-16 0-42 0L407.7 37.7 406 32l-6 0L112 32zM496 384l-64 0-16 0L96 384l-16 0-64 0 0-176 480 0 0 176zm-64 16l64 0 0 64-64 0 0-64zM16 400l64 0 0 64-64 0 0-64zM437.2 192L74.8 192 118 48 394 48l43.2 144zM80 288a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default Car;