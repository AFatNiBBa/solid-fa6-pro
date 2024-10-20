
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=regular highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M184 296.6l0-48 22.5-16.2 113 113L303.4 368l-48 0c-12.7 0-24.9 5.1-33.9 14.1l-38.1 38.1-51.5-51.5 38.1-38.1c9-9 14.1-21.2 14.1-33.9zM502.8 90.2L347.9 306 246 204.1 461.8 49.2c1.1-.8 2.4-1.2 3.7-1.2c1.7 0 3.3 .7 4.5 1.9L502.1 82c1.2 1.2 1.9 2.8 1.9 4.5c0 1.3-.4 2.6-1.2 3.7zM255.4 416l48 0c15.5 0 30-7.4 39-20L541.8 118.2C548.4 109 552 97.9 552 86.5c0-14.4-5.7-28.2-15.9-38.4L503.9 15.9C493.7 5.7 479.9 0 465.5 0C454.1 0 443 3.6 433.8 10.2L156 209.6c-12.6 9-20 23.5-20 39l0 48L92.3 340.3c-10.7 10.7-14.1 26-10.1 39.5L9.4 452.7c-6 6-9.4 14.1-9.4 22.6L0 480c0 17.7 14.3 32 32 32l84.7 0c8.5 0 16.6-3.4 22.6-9.4l32.8-32.8c13.6 4 28.8 .6 39.5-10.1L255.4 416zM134.7 439.3L110.1 464l-44.1 0 46.7-46.7 22.1 22.1z" />
    </Icon>
);

export default Highlighter;