
import { Icon } from "../../index";

/**
 * A component that renders the `tick` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tick?s=light tick}
 * @preview ![tick](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tick.svg)
 */
const Tick: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M56.6 256.9C60.9 275.1 77.2 288 96 288s35.1-12.9 39.4-31.1L165.9 129c1.4-6 2.1-12.1 2.1-18.2l0-6.8c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 6.8c0 6.1 .7 12.3 2.1 18.2L56.6 256.9zM56 104c0-22.1 17.9-40 40-40s40 17.9 40 40l0 6.8c0 3.6-.4 7.3-1.3 10.8L104.3 249.5c-.9 3.8-4.3 6.5-8.3 6.5s-7.4-2.7-8.3-6.5L57.3 121.6c-.8-3.5-1.3-7.2-1.3-10.8l0-6.8z" />
    </Icon>
);

export default Tick;