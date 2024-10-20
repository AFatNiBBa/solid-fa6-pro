
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=regular house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272.5 5.7c9-7.6 22.1-7.6 31.1 0l264 224c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.3-33.8 2.8L512 245.5 512 432c0 44.2-35.8 80-80 80l-288 0c-44.2 0-80-35.8-80-80l0-186.5L39.5 266.3c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l264-224zM112 204.8L112 432c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-227.2L288 55.5 112 204.8zM224 224a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm32 96l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80z" />
    </Icon>
);

export default HouseUser;