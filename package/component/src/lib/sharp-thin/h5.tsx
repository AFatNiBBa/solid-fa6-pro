
import { Icon } from "../../index";

/**
 * A component that renders the `h5` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h5?s=sharp-thin h5}
 * @preview ![h5](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/h5.svg)
 */
const H5: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 72l0-8L0 64l0 8L0 248 0 440l0 8 16 0 0-8 0-184 288 0 0 184 0 8 16 0 0-8 0-192 0-176 0-8-16 0 0 8 0 168L16 240 16 72zm416-8l-6.4 0-1.4 6.2-40 176L382 256l10 0 144 0c48.6 0 88 39.4 88 88s-39.4 88-88 88l-87.6 0c-20.7 0-39-13.2-45.5-32.8l-3.2-9.7-2.5-7.6-15.2 5.1 2.5 7.6 3.2 9.7c8.7 26.1 33.2 43.8 60.7 43.8l87.6 0c57.4 0 104-46.6 104-104s-46.6-104-104-104l-134 0L438.4 80 600 80l8 0 0-16-8 0L432 64z" />
    </Icon>
);

export default H5;