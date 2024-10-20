
import { Icon } from "../../index";

/**
 * A component that renders the `road-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/road-lock?s=sharp-light road-lock}
 * @preview ![road-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/road-lock.svg)
 */
const RoadLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M74.4 448L184.1 64 304 64l0 48 0 16 32 0 0-16 0-48 119.9 0 29.8 104.3c9.7-4 20.2-6.6 31.1-7.7L480 32 336 32l-32 0L160 32 41.1 448 32 480l33.3 0L304 480l32 0 48 0 0-32-48 0 0-48 0-16-32 0 0 16 0 48L74.4 448zM336 208l0-16-32 0 0 16 0 96 0 16 32 0 0-16 0-96zm192 16c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default RoadLock;