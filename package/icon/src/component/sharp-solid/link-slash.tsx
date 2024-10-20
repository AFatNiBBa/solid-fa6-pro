
import { Icon } from "../../index";

/**
 * A component that renders the `link-slash` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/link-slash?s=sharp-solid link-slash}
 * @preview ![link-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/link-slash.svg)
 */
const LinkSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48.4 14.8L29.4 .1 0 38 19 52.7 591.5 497.2l19 14.7L639.9 474l-19-14.7-131-101.7 90.3-90.3c56.2-56.2 56.2-147.4 0-203.6S432.8 7.4 376.6 63.7L365.3 75l45.3 45.3 11.3-11.3c31.2-31.2 81.9-31.2 113.1 0s31.2 81.9 0 113.1l-96 96-32.9-25.5c23.8-53 14-117.4-29.5-160.9c-52.4-52.4-135.1-56-191.6-10.7L48.4 14.8zM238.2 162.2c30.1-15.4 67.9-10.6 93.1 14.6c20.1 20.1 27.3 48.4 21.5 74.3L238.2 162.2zM116.6 187.9L59.8 244.7c-56.2 56.2-56.2 147.4 0 203.6s147.4 56.2 203.6 0L274.7 437l-45.3-45.3-11.3 11.3c-31.2 31.2-81.9 31.2-113.1 0s-31.2-81.9 0-113.1l62.2-62.2-50.6-39.9zm104.9 82.6c-2.2 39.5 11.7 79.7 41.9 109.9c38.8 38.8 94.3 50.8 143.4 36.1l-185.3-146z" />
    </Icon>
);

export default LinkSlash;