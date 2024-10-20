
import { Icon } from "../../index";

/**
 * A component that renders the `car-battery` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/car-battery?s=thin car-battery}
 * @preview ![car-battery](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/car-battery.svg)
 */
const CarBattery: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 80c4.4 0 8 3.6 8 8l0 40-96 0 0-40c0-4.4 3.6-8 8-8l80 0zm24 48l0-40c0-13.3-10.7-24-24-24L88 64C74.7 64 64 74.7 64 88l0 40c-35.3 0-64 28.7-64 64L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l0-40c0-13.3-10.7-24-24-24l-80 0c-13.3 0-24 10.7-24 24l0 40-128 0zm144 0l0-40c0-4.4 3.6-8 8-8l80 0c4.4 0 8 3.6 8 8l0 40-96 0zm-16 16l16 0 96 0 16 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48L64 432c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48l16 0 96 0 16 0 128 0zm48 72c-4.4 0-8 3.6-8 8l0 40-40 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l40 0 0 40c0 4.4 3.6 8 8 8s8-3.6 8-8l0-40 40 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-40 0 0-40c0-4.4-3.6-8-8-8zM96 264c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0z" />
    </Icon>
);

export default CarBattery;