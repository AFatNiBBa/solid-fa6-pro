
import { Icon } from "../../index";

/**
 * A component that renders the `mask` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask?s=sharp-thin mask}
 * @preview ![mask](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/mask.svg)
 */
const Mask: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M262.1 336l9.9 0 32 0 9.9 0 4.4 8.8L361.9 432l38.1 0c44.5 0 84.4-14.8 113.1-41.7C541.6 363.6 560 324 560 272c0-52.9-15-99.8-54.5-133.9C465.6 103.6 398.1 80 288 80s-177.6 23.6-217.5 58.1C31 172.2 16 219.1 16 272c0 52 18.4 91.6 46.9 118.3C91.6 417.2 131.5 432 176 432l38.1 0 43.6-87.2 4.4-8.8zM224 448l-48 0C80 448 0 384 0 272S64 64 288 64s288 96 288 208s-80 176-176 176l-48 0-48-96-32 0-48 96zM160 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm304 64a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default Mask;