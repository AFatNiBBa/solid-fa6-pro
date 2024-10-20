
import { Icon } from "../../index";

/**
 * A component that renders the `images` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=sharp-thin images}
 * @preview ![images](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/images.svg)
 */
const Images: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 180.7-90.3-90.3-5.7-5.7-5.7 5.7L304 292.7l-90.3-90.3-5.7-5.7-5.7 5.7L112 292.7 112 48l448 0zM112 368l0-52.7 96-96L292.7 304 229 367.7c-.1 .1-.2 .2-.3 .3L112 368zm448 0l-308.7 0 58.3-58.3L464 155.3l96 96L560 368zM112 32L96 32l0 16 0 320 0 16 16 0 448 0 16 0 0-16 0-320 0-16-16 0L112 32zm136 96a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zM224 88a40 40 0 1 0 0 80 40 40 0 1 0 0-80zM16 128L0 128l0 16L0 464l0 16 16 0 448 0 16 0 0-16 0-48-16 0 0 48L16 464l0-320 48 0 0-16-48 0z" />
    </Icon>
);

export default Images;