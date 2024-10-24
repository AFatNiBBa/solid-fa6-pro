
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-minimize` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-minimize?s=sharp-thin arrows-minimize}
 * @preview ![arrows-minimize](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/arrows-minimize.svg)
 */
const ArrowsMinimize: typeof Icon = x => (
    <Icon {...x}>
        <path d="M40 28.7l5.7 5.7L208 196.7 208 72l0-8 16 0 0 8 0 144 0 8-8 0L72 224l-8 0 0-16 8 0 124.7 0L34.3 45.7 28.7 40 40 28.7zM483.3 40l-5.7 5.7L315.3 208 440 208l8 0 0 16-8 0-144 0-8 0 0-8 0-144 0-8 16 0 0 8 0 124.7L466.3 34.3l5.7-5.7L483.3 40zM64 288l8 0 144 0 8 0 0 8 0 144 0 8-16 0 0-8 0-124.7L45.7 477.7 40 483.3 28.7 472l5.7-5.7L196.7 304 72 304l-8 0 0-16zm224 0l8 0 144 0 8 0 0 16-8 0-124.7 0L477.7 466.3l5.7 5.7L472 483.3l-5.7-5.7L304 315.3 304 440l0 8-16 0 0-8 0-144 0-8z" />
    </Icon>
);

export default ArrowsMinimize;