
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-arc` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-arc?s=light arrow-right-to-arc}
 * @preview ![arrow-right-to-arc](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-right-to-arc.svg)
 */
const ArrowRightToArc: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256C480 132.3 379.7 32 256 32c-8.8 0-16-7.2-16-16s7.2-16 16-16C397.4 0 512 114.6 512 256s-114.6 256-256 256c-8.8 0-16-7.2-16-16s7.2-16 16-16c123.7 0 224-100.3 224-224zM202.6 116l144 128c3.4 3 5.4 7.4 5.4 12s-2 8.9-5.4 12l-144 128c-6.6 5.9-16.7 5.3-22.6-1.3s-5.3-16.7 1.3-22.6L293.9 272 16 272c-8.8 0-16-7.2-16-16s7.2-16 16-16l277.9 0L181.4 140c-6.6-5.9-7.2-16-1.3-22.6s16-7.2 22.6-1.3z" />
    </Icon>
);

export default ArrowRightToArc;