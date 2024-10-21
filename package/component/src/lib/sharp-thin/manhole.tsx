
import { Icon } from "../../index";

/**
 * A component that renders the `manhole` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/manhole?s=sharp-thin manhole}
 * @preview ![manhole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/manhole.svg)
 */
const Manhole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM221.5 82.9l-12.6 3.5C134.6 106.9 80 175.1 80 256s54.6 149.1 128.9 169.6l12.6 3.5 5.9-11.6c5.3-10.4 16.1-17.5 28.5-17.5s23.2 7.1 28.5 17.5l5.9 11.6 12.6-3.5C377.4 405.1 432 336.9 432 256s-54.6-149.1-128.9-169.6l-12.6-3.5-5.9 11.6C279.2 104.9 268.4 112 256 112s-23.2-7.1-28.5-17.5l-5.9-11.6zm-8.3 18.9c7.9 15.6 24.1 26.2 42.8 26.2s34.8-10.7 42.8-26.2C366.4 120.5 416 182.5 416 256s-49.6 135.5-117.2 154.2C290.8 394.7 274.7 384 256 384s-34.8 10.7-42.8 26.2C145.6 391.5 96 329.5 96 256s49.6-135.5 117.2-154.2zM204 180l-24 0 0 24 24 0 0-24zm0 64l-24 0 0 24 24 0 0-24zm-24 64l0 24 24 0 0-24-24 0zm88-104l0-24-24 0 0 24 24 0zm0 128l0-24-24 0 0 24 24 0zm40-152l0 24 24 0 0-24-24 0zm-64 64l0 24 24 0 0-24-24 0zm88 0l-24 0 0 24 24 0 0-24zm-24 64l0 24 24 0 0-24-24 0z" />
    </Icon>
);

export default Manhole;