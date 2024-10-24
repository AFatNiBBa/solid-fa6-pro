
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=sharp-thin steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 395.3l0 100.6C129.9 492 33.4 402.8 18.1 288l122.6 0L248 395.3zM260.7 376l-9.4 0-97.6-97.6L180.9 224l150.1 0 27.2 54.4L260.7 376zm3.3 19.3L371.3 288l122.6 0C478.6 402.8 382.1 492 264 495.9l0-100.6zM372.9 272l-29.8-59.6-2.2-4.4-4.9 0-160 0-4.9 0-2.2 4.4L139.1 272 16.5 272c-.3-5.3-.5-10.6-.5-16C16 123.5 123.5 16 256 16s240 107.5 240 240c0 5.4-.2 10.7-.5 16l-122.5 0zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </Icon>
);

export default SteeringWheel;