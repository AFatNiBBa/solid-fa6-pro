
import { Icon } from "../../index";

/**
 * A component that renders the `umbrella` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/umbrella?s=sharp-light umbrella}
 * @preview ![umbrella](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/umbrella.svg)
 */
const Umbrella: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M304 0l0 16 0 32.4C438.2 55.3 548.8 148.9 571.7 272c.9 4.6 1.6 9.3 2.2 13.9l2.3 18.1L558 304l-6.5 0-7.2 0-.5-.6-4.2-4.7C525 282.3 503.7 272 480 272c-44.2 0-80 35.8-80 80l-16 0-16 0c0-44.2-35.8-80-80-80s-80 35.8-80 80l-16 0-16 0c0-44.2-35.8-80-80-80c-23.7 0-45 10.3-59.6 26.7l-4.2 4.7-.5 .6-7.2 0L18 304-.2 304l2.3-18.1c.6-4.7 1.3-9.3 2.2-13.9C27.2 148.9 137.8 55.3 272 48.4L272 16l0-16 32 0zM288 80C170.1 80 71.7 154.2 41.6 254.1C57.7 245.1 76.2 240 96 240c40.7 0 76.4 21.8 96 54.3c19.6-32.5 55.3-54.3 96-54.3s76.4 21.8 96 54.3c19.6-32.5 55.3-54.3 96-54.3c19.8 0 38.3 5.1 54.4 14.1C504.3 154.2 405.9 80 288 80zM272 306.7c5-1.8 10.4-2.7 16-2.7s11 1 16 2.7l0 139.8c0 36.1-29.3 65.4-65.4 65.4c-24.8 0-47.4-14-58.5-36.2l-2.3-4.7-7.2-14.3 28.6-14.3 7.2 14.3 2.3 4.7c5.7 11.3 17.2 18.5 29.9 18.5c18.5 0 33.4-15 33.4-33.4l0-139.8z" />
    </Icon>
);

export default Umbrella;