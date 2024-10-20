
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ampersand` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=sharp-light circle-ampersand}
 * @preview ![circle-ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-ampersand.svg)
 */
const CircleAmpersand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128l0 16 0 37.4c0 15.9 5.9 31.3 16.7 43.1l16.6 18.2-37.5 25.8c-17.4 11.9-27.7 31.7-27.7 52.7l0 46.8 0 16 16 0 96 0 16 0 8.2 0 4.8-6.7 20.5-28.7L337.8 384l43.3 0-5.3-5.8-51.3-56.3L365 265.3l9.3-13-26-18.6-9.3 13-36.4 51-44.9-49.4 18.7-12.8c17.4-11.9 27.7-31.7 27.7-52.7l0-38.8 0-16-16 0-96 0-16 0zm59.9 96.4L216.3 203c-5.4-5.9-8.3-13.6-8.3-21.5l0-21.4 64 0 0 22.8c0 10.5-5.2 20.4-13.9 26.4l-22.3 15.3zM231 266.6l52.5 57.7L263.8 352 176 352l0-30.8c0-10.5 5.2-20.4 13.9-26.4L231 266.6z" />
    </Icon>
);

export default CircleAmpersand;