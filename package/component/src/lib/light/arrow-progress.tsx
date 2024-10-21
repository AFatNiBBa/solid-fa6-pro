
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-progress` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-progress?s=light arrow-progress}
 * @preview ![arrow-progress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-progress.svg)
 */
const ArrowProgress: typeof Icon = x => (
    <Icon {...x}>
        <path d="M281.6 3.2c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4L288 48 112 48C50.1 48 0 98.1 0 160s50.1 112 112 112l288 0c44.2 0 80 35.8 80 80c0 39.5-28.7 72.3-66.3 78.8c-7.5-27-32.3-46.8-61.7-46.8c-35.3 0-64 28.7-64 64s28.7 64 64 64c30.1 0 55.4-20.8 62.2-48.9C469.4 456.1 512 409 512 352c0-61.9-50.1-112-112-112l-288 0c-44.2 0-80-35.8-80-80s35.8-80 80-80l176 0L262.4 99.2c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l64-48c4-3 6.4-7.8 6.4-12.8s-2.4-9.8-6.4-12.8l-64-48zM351.9 480a32 32 0 1 1 .1-64 32 32 0 1 1 -.1 64zM448 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96A64 64 0 1 0 448 0a64 64 0 1 0 0 128zM126 432c-7.1-27.6-32.2-48-62-48c-35.3 0-64 28.7-64 64s28.7 64 64 64c29.8 0 54.9-20.4 62-48l66 0-25.6 19.2c-7.1 5.3-8.5 15.3-3.2 22.4s15.3 8.5 22.4 3.2l64-48c4-3 6.4-7.8 6.4-12.8s-2.4-9.8-6.4-12.8l-64-48c-7.1-5.3-17.1-3.9-22.4 3.2s-3.9 17.1 3.2 22.4L192 432l-66 0zM32 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
    </Icon>
);

export default ArrowProgress;