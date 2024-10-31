
import { Icon } from "../../index";

/**
 * A component that renders the `cauldron` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cauldron?s=regular cauldron}
 * @preview ![cauldron](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/cauldron.svg)
 */
const Cauldron: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M160 64a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm112 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM74.2 252.5c9.6-17.7 20.1-33.2 28.6-44.5L224 208l121.2 0c8.5 11.4 19 26.9 28.6 44.5c15.9 29.2 26.2 58.5 26.2 81.9c0 39.2-18.3 70-49.4 92.5C318.3 450.2 272.6 464 224 464s-94.3-13.8-126.6-37.1C66.3 404.4 48 373.6 48 334.4c0-23.3 10.3-52.6 26.2-81.9zM44.6 208C22.5 243.4 0 290.8 0 334.4c0 37.4 11.9 69.4 32 95.5L32 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-15c40.4 25.5 91.8 39 144 39s103.6-13.5 144-39l0 15c0 13.3 10.7 24 24 24s24-10.7 24-24l0-58.1c20.1-26.1 32-58.1 32-95.5c0-43.6-22.5-91-44.6-126.4l20.6 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0-144 0L80 160l-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l20.6 0z" />
    </Icon>
);

export default Cauldron;