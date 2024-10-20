
import { Icon } from "../../index";

/**
 * A component that renders the `wave-triangle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wave-triangle?s=light wave-triangle}
 * @preview ![wave-triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wave-triangle.svg)
 */
const WaveTriangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176.1 32c5.2 0 10.1 2.6 13 6.9L464.2 436.2 611 230.7c5.1-7.2 15.1-8.9 22.3-3.7s8.9 15.1 3.7 22.3l-160 224c-3 4.2-7.9 6.7-13.1 6.7s-10.1-2.6-13-6.9L175.8 75.8 29 281.3c-5.1 7.2-15.1 8.9-22.3 3.7s-8.9-15.1-3.7-22.3l160-224c3-4.2 7.9-6.7 13.1-6.7z" />
    </Icon>
);

export default WaveTriangle;