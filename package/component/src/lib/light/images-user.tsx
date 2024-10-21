
import { Icon } from "../../index";

/**
 * A component that renders the `images-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=light images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 64L160 64c-17.7 0-32 14.3-32 32l0 224c0 17.7 14.3 32 32 32l64 0 0-16c0-44.2 35.8-80 80-80l32 0 32 0c44.2 0 80 35.8 80 80l0 16 64 0c17.7 0 32-14.3 32-32l0-224c0-17.7-14.3-32-32-32zM448 384l-32 0-160 0-32 0-64 0c-35.3 0-64-28.7-64-64L96 96c0-35.3 28.7-64 64-64l352 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-64 0zm-32-32l0-16c0-26.5-21.5-48-48-48l-64 0c-26.5 0-48 21.5-48 48l0 16 160 0zM16 96c8.8 0 16 7.2 16 16l0 240c0 53 43 96 96 96l336 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-336 0C57.3 480 0 422.7 0 352L0 112c0-8.8 7.2-16 16-16zm352 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM336 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default ImagesUser;