
import { Icon } from "../../index";

/**
 * A component that renders the `mistletoe` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mistletoe?s=regular mistletoe}
 * @preview ![mistletoe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mistletoe.svg)
 */
const Mistletoe: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0c13.3 0 24 10.7 24 24l0 62.1 98 98 8.7 1.7 65.9 12.7C537.7 208.6 576 255 576 309c0 41.4-33.6 75-75 75c-54 0-100.3-38.3-110.5-91.3l-12.7-65.9-1.7-8.7L312 153.9 312 288l6 8 46.8 62.4C377.3 375 384 395.2 384 416c0 53-43 96-96 96s-96-43-96-96c0-20.8 6.7-41 19.2-57.6L258 296l6-8 0-134.1L199.9 218l-1.4 7.4c3-.9 6.2-1.4 9.5-1.4c17.7 0 32 14.3 32 32s-14.3 32-32 32c-7.6 0-14.7-2.7-20.2-7.2l-2.3 11.9C175.4 345.7 129 384 75 384c-41.4 0-75-33.6-75-75c0-54 38.3-100.3 91.3-110.5l65.9-12.7 8.7-1.7 98-98L264 24c0-13.3 10.7-24 24-24zM100.4 245.6C70 251.4 48 278 48 309c0 14.9 12.1 27 27 27c30.9 0 57.5-22 63.4-52.4l9.1-47.1-47.1 9.1zm328.2-9.1l9.1 47.1C443.4 314 470 336 501 336c14.9 0 27-12.1 27-27c0-30.9-22-57.5-52.4-63.4l-47.1-9.1zM249.6 387.2c-6.2 8.3-9.6 18.4-9.6 28.8c0 26.5 21.5 48 48 48s48-21.5 48-48c0-10.4-3.4-20.5-9.6-28.8L288 336l-38.4 51.2zM384 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Mistletoe;