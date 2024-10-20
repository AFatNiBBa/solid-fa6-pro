
import { Icon } from "../../index";

/**
 * A component that renders the `face-saluting` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-saluting?s=sharp-thin face-saluting}
 * @preview ![face-saluting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-saluting.svg)
 */
const FaceSaluting: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 16c-10.5 0-20.8 .7-31 2L319 2.1C329.8 .7 340.8 0 352 0C493.4 0 608 114.6 608 256s-114.6 256-256 256c-116.9 0-215.6-78.4-246.2-185.5l15.4-4.4C149.9 422.5 242.4 496 352 496c132.6 0 240-107.5 240-240S484.6 16 352 16zm0 381c-55.2 0-94.4-21.6-117.3-42L245.3 343c20.4 18.2 55.9 38 106.7 38s86.3-19.8 106.7-38L469.3 355c-22.9 20.5-62.1 42-117.3 42zM272.4 192a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm144 16a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM248.5 7.5L283 61.4l4.3 6.7-6.7 4.3L229.7 105l30.4 50.8 4.1 6.9-6.9 4.1L124.5 246.2c-17.1 10.2-37.8 12.8-56.9 7.1c-58.2-17.4-69.1-95.1-18-127.9L237.4 5.1l6.7-4.3 4.3 6.7zM143.1 160.6L134.6 147 265.2 63.3 239.3 22.8l-181 116C18.7 164.3 27.2 224.5 72.3 238c14.8 4.4 30.8 2.4 44.1-5.5l125.9-75.3L217.6 116l-74.5 44.6z" />
    </Icon>
);

export default FaceSaluting;