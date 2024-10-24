
import { Icon } from "../../index";

/**
 * A component that renders the `holly-berry` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/holly-berry?s=sharp-solid holly-berry}
 * @preview ![holly-berry](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/holly-berry.svg)
 */
const HollyBerry: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-32 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm160 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM112 343.1L16 353.8l33.8 69.3L32 512l81.8-39.1 75.5 15.7L176 392.9l94.7-9L240 310.6 256 224l-80 36.8L97.4 249.1l14.6 94zm222.7 49.8l-13.3 95.7 75.5-15.7L478.7 512l-17.8-88.9 33.8-69.3-96-10.7 14.6-94-78.6 11.7-48.8-22.5-12.7 68.7 27 64.5 7.9 18.8 26.6 2.5z" />
    </Icon>
);

export default HollyBerry;