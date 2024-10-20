
import { Icon } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=thin highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 312.6l0-64c0-10.3 5-20 13.3-26l31.4-22.6L343.9 355.2l-22.6 31.4c-6 8.4-15.7 13.3-26 13.3l-64 0c-4.2 0-8.3 1.7-11.3 4.7l-35.7 35.7c-9.4 9.4-24.6 9.4-33.9 0l-46.8-46.8c-9.4-9.4-9.4-24.6 0-33.9l35.7-35.7c3-3 4.7-7.1 4.7-11.3zM520.8 108.9L353.4 342.1 201.9 190.6 435.1 23.2c6.5-4.7 14.3-7.2 22.4-7.2c10.2 0 19.9 4 27.1 11.2l32.2 32.2C524 66.6 528 76.3 528 86.5c0 8-2.5 15.8-7.2 22.4zM231.4 416l64 0c15.5 0 30-7.4 39-20L533.8 118.2C540.4 109 544 97.9 544 86.5c0-14.4-5.7-28.2-15.9-38.4L495.9 15.9C485.7 5.7 471.9 0 457.5 0C446.1 0 435 3.6 425.8 10.2L148 209.6c-12.6 9-20 23.5-20 39l0 64L92.3 348.3c-15.6 15.6-15.6 41 0 56.6l46.8 46.8c15.6 15.6 40.9 15.6 56.6 0L231.4 416zm-172 1.3L7.3 469.4C2.6 474.1 0 480.4 0 487c0 13.8 11.2 25 25 25l57.8 0c10.6 0 20.8-4.2 28.3-11.7l15.7-15.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L99.7 489c-4.5 4.5-10.6 7-17 7L25 496c-5 0-9-4-9-9c0-2.4 .9-4.7 2.6-6.3l52.1-52.1c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z" />
    </Icon>
);

export default Highlighter;