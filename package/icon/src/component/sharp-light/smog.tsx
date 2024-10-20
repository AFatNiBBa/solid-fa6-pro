
import { Icon } from "../../index";

/**
 * A component that renders the `smog` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=sharp-light smog}
 * @preview ![smog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/smog.svg)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 0C96.5 0 32 64.5 32 144l0 128 0 16 16 0 128 0 123.3 0c22.6 19.9 52.2 32 84.7 32s62.1-12.1 84.7-32l27.3 0 96 0 16 0 0-16 0-96c0-61.9-50.1-112-112-112c-10.7 0-21 1.5-30.8 4.3C443.8 27.7 401.1 0 352 0c-32.7 0-62.5 12.2-85.1 32.3C242.2 12.1 210.5 0 176 0zM64 144C64 82.1 114.1 32 176 32c31.4 0 59.7 12.9 80.1 33.7l12.1 12.4L279.6 65c17.6-20.2 43.5-33 72.4-33c41 0 76.1 25.7 89.8 62l6 15.9 15.5-6.9c10-4.5 21-7 32.7-7c44.2 0 80 35.8 80 80l0 80-80 0-33.6 0-6.5 0-4.7 4.6c-17.3 17-41 27.4-67.2 27.4s-49.9-10.4-67.2-27.4l-4.7-4.6-6.5 0L176 256 64 256l0-112zM80 384l-16 0 0 32 16 0 128 0 16 0 0-32-16 0L80 384zm192 0l-16 0 0 32 16 0 352 0 16 0 0-32-16 0-352 0zM16 480L0 480l0 32 16 0 352 0 16 0 0-32-16 0L16 480zm416 0l-16 0 0 32 16 0 128 0 16 0 0-32-16 0-128 0z" />
    </Icon>
);

export default Smog;