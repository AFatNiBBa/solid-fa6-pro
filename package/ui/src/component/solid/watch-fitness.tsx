
import { Icon } from "../../index";

/**
 * A component that renders the `watch-fitness` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/watch-fitness?s=solid watch-fitness}
 * @preview ![watch-fitness](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/watch-fitness.svg)
 */
const WatchFitness: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 48C64 21.5 85.5 0 112 0L272 0c26.5 0 48 21.5 48 48L64 48zm0 416l256 0c0 26.5-21.5 48-48 48l-160 0c-26.5 0-48-21.5-48-48zM0 160c0-44.2 35.8-80 80-80l224 0c44.2 0 80 35.8 80 80l0 192c0 44.2-35.8 80-80 80L80 432c-44.2 0-80-35.8-80-80L0 160zm141.3 0C107.4 160 80 187.4 80 221.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default WatchFitness;