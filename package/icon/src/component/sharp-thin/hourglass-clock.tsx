
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-clock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-clock?s=sharp-thin hourglass-clock}
 * @preview ![hourglass-clock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/hourglass-clock.svg)
 */
const HourglassClock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M8 0L0 0 0 16l8 0 24 0 0 128 0 4 3.3 2.4L178.5 256 35.3 361.6 32 364l0 4 0 128L8 496l-8 0 0 16 8 0 322.8 0c-6.9-4.9-13.5-10.2-19.6-16L48 496l0-124L192 265.9l71.1 52.4c1.6-5.4 3.4-10.7 5.5-15.8L205.5 256 348.7 150.4 352 148l0-4 0-128 24 0 8 0 0-16-8 0L8 0zM336 16l0 124L192 246.1 48 140 48 16l288 0zm96 224a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm8-224l-16 0 0 8 0 72 0 8 8 0 56 0 8 0 0-16-8 0-48 0 0-64 0-8z" />
    </Icon>
);

export default HourglassClock;