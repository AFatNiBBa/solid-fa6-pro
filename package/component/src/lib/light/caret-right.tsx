
import { Icon } from "../../index";

/**
 * A component that renders the `caret-right` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/caret-right?s=light caret-right}
 * @preview ![caret-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/caret-right.svg)
 */
const CaretRight: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M221.8 250.4c1.3 1.4 2.2 3.5 2.2 5.6s-.8 4.2-2.2 5.6L108.3 381.8c-1.3 1.4-3.2 2.2-5.2 2.2c-3.9 0-7.1-3.2-7.1-7.1l0-241.7c0-3.9 3.2-7.1 7.1-7.1c2 0 3.8 .8 5.2 2.2L221.8 250.4zm23.3-22L131.6 108.3c-7.4-7.8-17.7-12.3-28.4-12.3C81.5 96 64 113.5 64 135.1l0 241.7c0 21.6 17.5 39.1 39.1 39.1c10.8 0 21.1-4.4 28.5-12.3L245.1 283.6c7-7.4 10.9-17.3 10.9-27.6s-3.9-20.1-10.9-27.6z" />
    </Icon>
);

export default CaretRight;