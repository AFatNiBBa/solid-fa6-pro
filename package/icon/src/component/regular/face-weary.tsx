
import { Icon } from "../../index";

/**
 * A component that renders the `face-weary` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-weary?s=regular face-weary}
 * @preview ![face-weary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-weary.svg)
 */
const FaceWeary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm176.5 64.3C196.1 302.1 223.8 288 256 288s59.9 14.1 79.5 32.3C354.5 338.1 368 362 368 384c0 5.4-2.7 10.4-7.2 13.4s-10.2 3.4-15.2 1.3l-17.2-7.5c-22.8-10-47.5-15.1-72.4-15.1s-49.6 5.2-72.4 15.1l-17.2 7.5c-4.9 2.2-10.7 1.7-15.2-1.3s-7.2-8-7.2-13.4c0-22 13.5-45.9 32.5-63.7zm34.8-155.6c6.2 6.2 6.2 16.4 0 22.6l-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4c-8.7 1.5-17-4.4-18.4-13.2s4.4-17 13.2-18.4l2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c6.2-6.2 16.4-6.2 22.6 0zm89.4 22.6c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4c8.7 1.5 14.6 9.7 13.2 18.4s-9.7 14.6-18.4 13.2l-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z" />
    </Icon>
);

export default FaceWeary;