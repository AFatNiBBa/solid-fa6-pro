
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=light highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M176 296.6l0-48c0-5.2 2.5-10 6.7-13l27-19.4L343.7 350.4l-19.4 27c-3 4.2-7.8 6.7-13 6.7l-48 0c-8.5 0-16.6 3.4-22.6 9.4L197 437.1c-3.1 3.1-8.2 3.1-11.3 0l-62.8-62.8c-3.1-3.1-3.1-8.2 0-11.3l43.7-43.7c6-6 9.4-14.1 9.4-22.6zM523.8 99.5L362.6 324 236 197.4 460.5 36.2c3.8-2.7 8.4-4.2 13-4.2c5.9 0 11.6 2.4 15.8 6.5l32.2 32.2c4.2 4.2 6.5 9.9 6.5 15.8c0 4.7-1.5 9.2-4.2 13zM263.4 416l48 0c15.5 0 30-7.4 39-20L549.8 118.2C556.4 109 560 97.9 560 86.5c0-14.4-5.7-28.2-15.9-38.4L511.9 15.9C501.7 5.7 487.9 0 473.5 0C462.1 0 451 3.6 441.8 10.2L164 209.6c-12.6 9-20 23.5-20 39l0 48-43.7 43.7c-11.4 11.4-14.5 27.9-9.3 42l-84 84c-4.5 4.5-7 10.6-7 17L0 488c0 13.3 10.7 24 24 24l100.7 0c6.4 0 12.5-2.5 17-7l36-36c14.2 5.2 30.7 2.1 42-9.3L263.4 416zm-111 33l-31 31-82.7 0L111 407.6 152.4 449z" />
    </Icon>
);

export default Highlighter;