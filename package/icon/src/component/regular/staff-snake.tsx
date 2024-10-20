
import { Icon } from "../../index";

/**
 * A component that renders the `staff-snake` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/staff-snake?s=regular staff-snake}
 * @preview ![staff-snake](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/staff-snake.svg)
 */
const StaffSnake: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M222.6 43.2l-.1 4.8L296 48c48.6 0 88 39.4 88 88s-39.4 88-88 88l-48 0 0-48 48 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-75 0-6 192 25 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l0-48c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.5 0-3.6 115.5L208.5 495l0 1c-.3 8.9-7.6 16-16.5 16s-16.2-7.1-16.5-16l0-1-1.4-43.5L174 448l-54 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l52.5 0-2-64L144 336c-44.2 0-80-35.8-80-80c0-41.5 31.6-75.6 72-79.6l0 48.6c-13.8 3.6-24 16.1-24 31c0 17.7 14.3 32 32 32l25 0L163 96l-35.6 0c.4 2.6 .6 5.3 .6 8c0 30.9-25.1 56-56 56l-16 0c-30.9 0-56-25.1-56-56S25.1 48 56 48l8 0 8 0 89.5 0-.1-4.8L161 32c0-.7 0-1.3 0-1.9c.5-16.6 14.1-30 31-30s30.5 13.4 31 30c0 .6 0 1.3 0 1.9l-.4 11.2zM64 112a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default StaffSnake;