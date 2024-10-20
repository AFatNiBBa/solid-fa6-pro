
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=light stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 352l0 32L80 384c-26.5 0-48 21.5-48 48s21.5 48 48 48l512 0c26.5 0 48-21.5 48-48l0-16 0-32 0-48 0-32 0-4.7c0-36.4-20.5-69.6-53.1-85.9L260.7 50.4C236.6 38.3 209.9 32 182.9 32C128.2 32 76.7 57.8 43.8 101.6L11.5 144.7C4 154.6 0 166.7 0 179.1c0 26.4 17.9 49.3 43.5 55.7L72 242l0 78c0 17.7 14.3 32 32 32l344 0zm-64-32l-280 0 0-70 280 70zm224 64l-128 0 0-48c0-14.7-10-27.5-24.2-31L51.3 203.8C39.9 201 32 190.8 32 179.1c0-5.5 1.8-10.9 5.1-15.3l32.3-43.1C96.2 85 138.3 64 182.9 64c22 0 43.8 5.1 63.5 15L572.6 242.1c21.7 10.8 35.4 33 35.4 57.2l0 4.7 0 32 0 48zM480 416l128 0 0 16c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16s7.2-16 16-16l368 0 32 0z" />
    </Icon>
);

export default Stapler;