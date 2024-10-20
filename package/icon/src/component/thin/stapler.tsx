
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=thin stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 352l0 64L64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l528 0c26.5 0 48-21.5 48-48l0-8 0-8 0-80 0-16 0-4.7c0-36.4-20.5-69.6-53.1-85.9L260.7 66.4C236.6 54.3 209.9 48 182.9 48C128.2 48 76.7 73.8 43.8 117.6l-35.2 47C3 172 0 181 0 190.4c0 19.8 13.5 37 32.6 41.8L48 236l0 92c0 13.3 10.7 24 24 24l376 0zm0-16L72 336c-4.4 0-8-3.6-8-8l0-88 384 96zm176 80l-160 0 0-80c0-7.3-5-13.7-12.1-15.5L36.5 216.6c-12.1-3-20.5-13.8-20.5-26.3c0-5.9 1.9-11.6 5.4-16.3l35.2-47C86.5 87.4 133.2 64 182.9 64c24.5 0 48.7 5.7 70.6 16.7L579.8 243.8C606.9 257.3 624 285 624 315.3l0 4.7 0 16 0 80zM464 432l160 0c0 17.7-14.3 32-32 32L64 464c-8.8 0-16-7.2-16-16s7.2-16 16-16l384 0 16 0z" />
    </Icon>
);

export default Stapler;