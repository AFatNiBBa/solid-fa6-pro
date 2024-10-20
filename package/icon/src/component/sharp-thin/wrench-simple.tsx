
import { Icon } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=sharp-thin wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M267.3 171.3l4.7-4.7 0-6.6 0-132.8c57 29.1 96 88.4 96 156.8c0 65.1-35.4 122-88 152.5l-8 4.6 0 9.2 0 65.7 0 80 0 16 16 0 0-16 0-145.7c57.4-33.2 96-95.2 96-166.3c0-77.5-45.9-144.3-112-174.6c-5.2-2.4-10.5-4.6-16-6.5L256 20l0 140-52.7 52.7L192 224l-11.3-11.3L128 160l0-140 0-17.1c-5.5 1.9-10.8 4.1-16 6.5C45.9 39.7 0 106.5 0 184c0 71.1 38.6 133.1 96 166.3L96 496l0 16 16 0 0-16 0-80 0-65.7 0-9.2-8-4.6C51.4 306 16 249.1 16 184c0-68.4 39-127.7 96-156.8L112 160l0 6.6 4.7 4.7 64 64L192 246.6l11.3-11.3 64-64z" />
    </Icon>
);

export default WrenchSimple;