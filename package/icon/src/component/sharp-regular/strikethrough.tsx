
import { Icon } from "../../index";

/**
 * A component that renders the `strikethrough` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/strikethrough?s=sharp-regular strikethrough}
 * @preview ![strikethrough](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/strikethrough.svg)
 */
const Strikethrough: typeof Icon = x => (
    <Icon {...x}>
        <path d="M145.5 138c4-21.5 17.9-37.4 41.7-47.4c24.7-10.4 59.4-13.7 99.9-7.5c12.8 2 52.4 9.5 64.9 12.8l23.2 6.1 12.1-46.4L364 49.4c-14.7-3.8-56.1-11.7-69.7-13.8c-46.2-7.1-90.4-4.1-125.7 10.7c-36.1 15.1-63.3 43.1-70.5 83.9c-.1 .4-.1 .9-.2 1.3c-2.8 23.4 .5 44.2 9.8 62.2c9.2 17.8 23.2 31.2 38.8 41.5c2.4 1.6 5 3.2 7.5 4.7L24 240 0 240l0 48 24 0 464 0 24 0 0-48-24 0-192.2 0c-9.9-3.1-19.7-6-29.2-8.8l-.3-.1c-37.7-11.1-70.5-20.7-93.3-35.8c-10.9-7.2-18.2-14.9-22.6-23.5c-4.2-8.2-6.6-18.9-4.9-33.8zM364 337.1c3.7 8.6 5.5 20.1 2.6 36.3c-3.8 21.8-17.8 37.9-41.8 48c-24.7 10.4-59.4 13.7-99.8 7.5c-20.1-3.2-54.3-14.6-81.2-23.6c0 0 0 0 0 0s0 0 0 0c-5.9-2-11.4-3.8-16.3-5.4l-22.8-7.4L89.7 438l22.8 7.4c4 1.3 8.8 2.9 14 4.7c26.6 8.9 66.4 22.2 90.9 26.2l.1 0c46.2 7.1 90.4 4.1 125.7-10.7c36.1-15.1 63.3-43.1 70.5-83.9c4-22.9 2.4-43.5-5-61.7l-57.2 0c5.7 5.3 9.7 11 12.3 17.1z" />
    </Icon>
);

export default Strikethrough;