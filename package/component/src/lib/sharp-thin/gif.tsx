
import { Icon } from "../../index";

/**
 * A component that renders the `gif` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gif?s=sharp-thin gif}
 * @preview ![gif](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/gif.svg)
 */
const Gif: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 416L16 464 16 48l544 0zM16 32L0 32 0 48 0 464l0 16 16 0 544 0 16 0 0-16 0-416 0-16-16 0L16 32zM304 160l-16 0 0 8 0 176 0 8 16 0 0-8 0-176 0-8zm64 0l0 8 0 96 0 80 0 8 16 0 0-8 0-72 80 0 8 0 0-16-8 0-80 0 0-80 96 0 8 0 0-16-8 0-104 0-8 0zM96 256c0-44.2 35.8-80 80-80c19.3 0 37.1 6.9 50.9 18.3l6.2 5.1L243.3 187l-6.2-5.1C220.5 168.2 199.2 160 176 160c-53 0-96 43-96 96s43 96 96 96c23.2 0 44.5-8.2 61.1-21.9l2.9-2.4 0-3.8 0-67.9 0-8-8 0-72 0-8 0 0 16 8 0 64 0 0 56c-13.4 10-30 16-48 16c-44.2 0-80-35.8-80-80z" />
    </Icon>
);

export default Gif;