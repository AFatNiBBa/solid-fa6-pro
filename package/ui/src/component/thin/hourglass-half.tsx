
import { Icon } from "../../index";

/**
 * A component that renders the `hourglass-half` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hourglass-half?s=thin hourglass-half}
 * @preview ![hourglass-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/hourglass-half.svg)
 */
const HourglassHalf: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8l24 0 0 55.2c0 48.3 23 93.7 61.8 122.4L178.5 256 93.8 318.4C55 347 32 392.5 32 440.8L32 496 8 496c-4.4 0-8 3.6-8 8s3.6 8 8 8l368 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-24 0 0-55.2c0-48.3-23-93.7-61.8-122.4L205.5 256l84.7-62.4C329 165 352 119.5 352 71.2L352 16l24 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 0zM336 16l0 55.2c0 19.9-4.3 39.2-12.4 56.8L60.4 128C52.3 110.4 48 91.1 48 71.2L48 16l288 0zM314.9 144c-8.9 14.1-20.5 26.6-34.2 36.7L192 246.1l-88.7-65.3C89.6 170.6 78 158.1 69.1 144l245.8 0zM192 265.9l88.7 65.3c28 20.7 46.8 51.1 53.1 84.7L50.3 416c6.2-33.7 25-64.1 53.1-84.7L192 265.9zM48 440.8c0-2.9 .1-5.9 .3-8.8l287.4 0c.2 2.9 .3 5.8 .3 8.8l0 55.2L48 496l0-55.2z" />
    </Icon>
);

export default HourglassHalf;