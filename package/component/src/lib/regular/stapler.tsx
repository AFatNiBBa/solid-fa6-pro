
import { Icon } from "../../index";

/**
 * A component that renders the `stapler` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stapler?s=regular stapler}
 * @preview ![stapler](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/stapler.svg)
 */
const Stapler: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 384l0 48L56 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l392 0 48 0 24 0 72 0c26.5 0 48-21.5 48-48l0-96 0-36.7 0-11.3-.7-.1c-3.8-31.8-23.3-59.9-52.4-74.4L260.7 50.4C236.6 38.3 209.9 32 182.9 32C128.2 32 76.7 57.8 43.8 101.6L11.5 144.7C4 154.6 0 166.7 0 179.1c0 26.4 17.9 49.3 43.5 55.7L64 240l0 104c0 22.1 17.9 40 40 40l344 0zm0-48l-336 0 0-84 336 84zm72 96l-24 0 0-96c0-22-15-41.2-36.4-46.6L55.2 188.3c-4.2-1.1-7.2-4.8-7.2-9.2c0-2 .7-4 1.9-5.7l32.3-43.1C106 98.7 143.3 80 182.9 80c19.5 0 38.8 4.6 56.3 13.3L565.5 256.4c14.5 7.3 24.3 21.3 26.2 37.2c.1 .8 .2 1.6 .3 2.4l0 3.4 0 36.7 0 96-72 0z" />
    </Icon>
);

export default Stapler;