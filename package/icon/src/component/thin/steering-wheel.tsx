
import { Icon } from "../../index";

/**
 * A component that renders the `steering-wheel` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/steering-wheel?s=thin steering-wheel}
 * @preview ![steering-wheel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/steering-wheel.svg)
 */
const SteeringWheel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M248 385.9l0 109.9C129.9 492 33.4 402.8 18.1 288l127.5 0c2 5.1 5 9.9 9.1 14L227.7 375c5.8 5.8 12.9 9.4 20.3 10.9zm16 0c7.4-1.5 14.5-5.1 20.3-10.9L357.3 302c4.1-4.1 7.1-8.8 9.1-14l127.5 0C478.6 402.8 382.1 492 264 495.9l0-109.9zM369 272c-.2-5.5-1.6-11-4.2-16.2L352 230.1c-6.8-13.6-20.6-22.1-35.8-22.1l-120.4 0c-15.2 0-29 8.6-35.8 22.1l-12.8 25.7c-2.6 5.2-4 10.7-4.2 16.2L16.5 272c-.3-5.3-.5-10.6-.5-16C16 123.5 123.5 16 256 16s240 107.5 240 240c0 5.4-.2 10.7-.5 16L369 272zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM174.3 237.3c4.1-8.1 12.4-13.3 21.5-13.3l120.4 0c9.1 0 17.4 5.1 21.5 13.3l12.8 25.7c4.6 9.2 2.8 20.4-4.5 27.7L273 363.7c-9.4 9.4-24.6 9.4-33.9 0L166 290.7c-7.3-7.3-9.1-18.5-4.5-27.7l12.8-25.7z" />
    </Icon>
);

export default SteeringWheel;