
import { Icon } from "../../index";

/**
 * A component that renders the `images` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images?s=sharp-regular images}
 * @preview ![images](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/images.svg)
 */
const Images: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 80l384 0 0 256-37.2 0L388.1 178.9 368 148.1l-20.1 30.7-52.2 79.8-12.4-16.9L264 215.4l-19.4 26.4L175.6 336 144 336l0-256zM96 32l0 48 0 256 0 48 48 0 384 0 48 0 0-48 0-256 0-48-48 0L144 32 96 32zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312zm208 24a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Images;