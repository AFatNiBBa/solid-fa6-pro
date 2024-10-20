
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-plus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-plus?s=sharp-thin alarm-plus}
 * @preview ![alarm-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/alarm-plus.svg)
 */
const AlarmPlus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M157.4 25l5.9 5.4L152.4 42.2l-5.9-5.4C132.7 23.9 114.1 16 93.7 16C50.8 16 16 50.8 16 93.7c0 15.4 4.4 29.7 12.1 41.7l4.3 6.7-13.5 8.6L14.6 144C5.4 129.5 0 112.2 0 93.7C0 42 42 0 93.7 0c24.6 0 47 9.5 63.7 25zm-54.1 427L53.7 501.7 48 507.3 36.7 496l5.7-5.7 49.7-49.7C54.8 400.6 32 347 32 288C32 164.3 132.3 64 256 64s224 100.3 224 224c0 59-22.8 112.6-60.1 152.6l49.7 49.7 5.7 5.7L464 507.3l-5.7-5.7-49.7-49.7C368.6 489.2 315 512 256 512s-112.6-22.8-152.6-60.1zM464 288A208 208 0 1 0 48 288a208 208 0 1 0 416 0zM354.6 25C371.3 9.5 393.7 0 418.3 0C470 0 512 42 512 93.7c0 18.5-5.4 35.8-14.6 50.3l-4.3 6.7-13.5-8.6 4.3-6.7c7.7-12 12.1-26.3 12.1-41.7C496 50.8 461.2 16 418.3 16c-20.4 0-39 7.9-52.8 20.7l-5.9 5.4L348.7 30.4l5.9-5.4zM264 184l0 8 0 88 88 0 8 0 0 16-8 0-88 0 0 88 0 8-16 0 0-8 0-88-88 0-8 0 0-16 8 0 88 0 0-88 0-8 16 0z" />
    </Icon>
);

export default AlarmPlus;