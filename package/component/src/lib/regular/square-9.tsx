
import { Icon } from "../../index";

/**
 * A component that renders the `square-9` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-9?s=regular square-9}
 * @preview ![square-9](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-9.svg)
 */
const Square_9: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM224 272a48 48 0 1 1 0-96 48 48 0 1 1 0 96zm-26 44.4l-29.6 25.4c-10.1 8.6-11.2 23.8-2.6 33.8s23.8 11.2 33.8 2.6l81.6-70C305.8 287.2 320 256.4 320 224c0-53-43-96-96-96s-96 43-96 96c0 44 29.6 81.1 70 92.4z" />
    </Icon>
);

export default Square_9;