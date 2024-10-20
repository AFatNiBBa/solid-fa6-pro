
import { Icon } from "../../index";

/**
 * A component that renders the `wrench-simple` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench-simple?s=light wrench-simple}
 * @preview ![wrench-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wrench-simple.svg)
 */
const WrenchSimple: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M137 2.8c4.4 3 7 7.9 7 13.2l0 152 48 36 48-36 0-152c0-5.3 2.6-10.2 7-13.2s9.9-3.6 14.8-1.7C332.9 28.9 384 94.1 384 176c0 71.1-38.6 133.1-96 166.3L288 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-163.2c0-6 3.4-11.5 8.7-14.2C316.6 292.1 352 238.2 352 176c0-58.9-31.9-107.7-80-134.8L272 176c0 5-2.4 9.8-6.4 12.8l-64 48c-5.7 4.3-13.5 4.3-19.2 0l-64-48c-4-3-6.4-7.8-6.4-12.8l0-134.8C63.9 68.3 32 117.1 32 176c0 62.2 35.4 116.1 87.3 142.6c5.4 2.7 8.7 8.2 8.7 14.2L128 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-153.7C38.6 309.1 0 247.1 0 176C0 94.1 51.1 28.9 122.2 1.1C127.1-.8 132.7-.2 137 2.8z" />
    </Icon>
);

export default WrenchSimple;