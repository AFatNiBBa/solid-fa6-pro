
import { Icon } from "../../index";

/**
 * A component that renders the `images-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=sharp-thin images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 48l0 320-102 0L416 256l-160 0L214 368l-102 0 0-320 448 0zM464 384l96 0 16 0 0-16 0-320 0-16-16 0L112 32 96 32l0 16 0 320 0 16 16 0 96 0 17.1 0 221.8 0 17.1 0zm-23.1-16l-209.8 0 36-96 137.8 0 36 96zM64 128l-48 0L0 128l0 16L0 464l0 16 16 0 448 0 16 0 0-16 0-48-16 0 0 48L16 464l0-320 48 0 0-16zm224 32a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm48 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default ImagesUser;