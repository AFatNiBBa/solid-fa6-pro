
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass?s=thin hourglass}
 * @preview ![hourglass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hourglass.svg)
 */
const Hourglass: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l24 0 0 55.2c0 48.3 23 93.7 61.8 122.4L178.5 256 93.8 318.4C55 347 32 392.5 32 440.8L32 496 8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l368 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-55.2c0-48.3-23-93.7-61.8-122.4L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2L352 16l24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 0zM336 16l0 55.2c0 43.2-20.5 83.9-55.3 109.5L192 246.1l-88.7-65.3C68.5 155.1 48 114.4 48 71.2L48 16l288 0zM192 265.9l88.7 65.3c34.8 25.6 55.3 66.3 55.3 109.5l0 55.2L48 496l0-55.2c0-43.2 20.5-83.9 55.3-109.5L192 265.9z" />
    </Icon>
);

export default Hourglass;