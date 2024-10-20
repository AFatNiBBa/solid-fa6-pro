
import { Icon } from "../../index";

/**
 * A component that renders the `shuffle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shuffle?s=light shuffle}
 * @preview ![shuffle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/shuffle.svg)
 */
const Shuffle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M427.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 112 400 112l-56 0c-20.1 0-39.1 9.5-51.2 25.6L244 202.7l20 26.7 54.4-72.5c6-8.1 15.5-12.8 25.6-12.8l56 0 57.4 0-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80zM124.8 361.6c-3 4-7.8 6.4-12.8 6.4l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c15.1 0 29.3-7.1 38.4-19.2L204 309.3l-20-26.7-59.2 78.9zM404.7 475.3c6.2 6.2 16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L457.4 368 400 368l-56 0c-10.1 0-19.6-4.7-25.6-12.8l-168-224C141.3 119.1 127.1 112 112 112l-96 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0c5 0 9.8 2.4 12.8 6.4l168 224C304.9 390.5 323.9 400 344 400l56 0 57.4 0-52.7 52.7c-6.2 6.2-6.2 16.4 0 22.6z" />
    </Icon>
);

export default Shuffle;