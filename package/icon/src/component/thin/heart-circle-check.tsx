
import { Icon } from "../../index";

/**
 * A component that renders the `heart-circle-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-check?s=thin heart-circle-check}
 * @preview ![heart-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/heart-circle-check.svg)
 */
const HeartCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M393.6 57.7c-42.9-5.6-85.8 12.6-111.2 47.6l-20 27.5c-1.5 2.1-3.9 3.3-6.5 3.3s-5-1.2-6.5-3.3l-20-27.5c-25.4-34.9-68.3-53.2-111.2-47.6C60.1 65.3 16 114.9 16 173.5c0 30.3 11.8 59.4 32.9 81.2L248 460.4c2.2 2.3 5.2 3.6 8.4 3.6s6.2-1.3 8.4-3.6l11-11.4c2.6 4.9 5.4 9.7 8.4 14.4l-7.8 8.1c-5.2 5.4-12.4 8.5-19.9 8.5c-7.5 0-14.7-3-19.9-8.4L37.4 265.8C13.4 241.1 0 208 0 173.5C0 106.8 50.2 50.4 116.3 41.8c48.6-6.3 97.4 14.3 126.2 54L256 114.4l13.5-18.6c28.9-39.7 77.6-60.4 126.2-54c66.1 8.6 116.3 65 116.3 131.8c0 12-1.6 23.9-4.8 35.3c-4.9-2.3-9.8-4.4-14.9-6.2c2.4-9.4 3.7-19.2 3.7-29C496 115 451.9 65.3 393.6 57.7zM432 496a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm69.7 98.3c3.1 3.1 3.1 8.2 0 11.3l-80 80c-3.1 3.1-8.2 3.1-11.3 0l-48-48c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L416 396.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0z" />
    </Icon>
);

export default HeartCircleCheck;