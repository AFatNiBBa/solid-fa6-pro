
import { Icon } from "../../index";

/**
 * A component that renders the `wave-square` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-square?s=thin wave-square}
 * @preview ![wave-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/wave-square.svg)
 */
const WaveSquare: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M184 48c-13.3 0-24 10.7-24 24l0 152c0 22.1-17.9 40-40 40L8 264c-4.4 0-8-3.6-8-8s3.6-8 8-8l112 0c13.3 0 24-10.7 24-24l0-152c0-22.1 17.9-40 40-40l104 0c22.1 0 40 17.9 40 40l0 368c0 13.3 10.7 24 24 24l104 0c13.3 0 24-10.7 24-24l0-152c0-22.1 17.9-40 40-40l112 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0c-13.3 0-24 10.7-24 24l0 152c0 22.1-17.9 40-40 40l-104 0c-22.1 0-40-17.9-40-40l0-368c0-13.3-10.7-24-24-24L184 48z" />
    </Icon>
);

export default WaveSquare;