
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=solid steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 358.9l0 86.5C143.6 431.9 80.1 368.4 66.7 288l102.2 0L224 358.9zm64 0L343.1 288l102.2 0C431.9 368.4 368.4 431.9 288 445.3l0-86.5zM352 224l-7.2-14.3c-5.4-10.8-16.5-17.7-28.6-17.7l-120.4 0c-12.1 0-23.2 6.8-28.6 17.7L160 224l-93.3 0C81.9 133.2 160.9 64 256 64s174.1 69.2 189.3 160L352 224zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default SteeringWheel;