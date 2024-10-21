
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=regular face-smile-plus}
 * @preview ![face-smile-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-smile-plus.svg)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 0c13.3 0 24 10.7 24 24l0 48 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0 0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48-48 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-48c0-13.3 10.7-24 24-24zM400 288A176 176 0 1 0 48 288a176 176 0 1 0 352 0zM0 288a224 224 0 1 1 448 0A224 224 0 1 1 0 288zm144.4-80a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM146 332.8c19.1 21.6 46.9 35.2 78 35.2s58.9-13.6 78-35.2c8.8-9.9 23.9-10.9 33.9-2.1s10.9 23.9 2.1 33.9C310.2 396.1 269.4 416 224 416s-86.2-19.9-114-51.5c-8.8-9.9-7.8-25.1 2.1-33.9s25.1-7.8 33.9 2.1z" />
    </Icon>
);

export default FaceSmilePlus;