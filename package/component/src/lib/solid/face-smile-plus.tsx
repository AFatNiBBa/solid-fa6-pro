
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile-plus` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile-plus?s=solid face-smile-plus}
 * @preview ![face-smile-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-smile-plus.svg)
 */
const FaceSmilePlus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 0c-13.3 0-24 10.7-24 24l0 48-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l48 0 0 48c0 13.3 10.7 24 24 24s24-10.7 24-24l0-48 48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-48c0-13.3-10.7-24-24-24zM224 512a224 224 0 1 0 0-448 224 224 0 1 0 0 448zM144.4 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM140 346.1c20.5 23.3 50.6 37.9 84 37.9s63.5-14.6 84-37.9c5.8-6.6 16-7.3 22.6-1.4s7.3 16 1.4 22.6C305.6 397.1 267 416 224 416s-81.6-18.9-108-48.7c-5.8-6.6-5.2-16.7 1.4-22.6s16.7-5.2 22.6 1.4z" />
    </Icon>
);

export default FaceSmilePlus;