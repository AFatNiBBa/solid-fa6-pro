
import { Icon } from "../../index";

/**
 * A component that renders the `face-disappointed` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-disappointed?s=sharp-regular face-disappointed}
 * @preview ![face-disappointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-disappointed.svg)
 */
const FaceDisappointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM294.5 408.4c-7.4-7.9-20-16.4-38.5-16.4s-31.1 8.5-38.5 16.4l-16.4 17.5-35.1-32.7 16.4-17.5C196.7 360.3 221.4 344 256 344s59.3 16.3 73.5 31.6l16.4 17.5-35.1 32.7-16.4-17.5zM222.6 256l-11.3 11.3-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 233.4 222.6 256zm78.1 11.3L289.4 256 312 233.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z" />
    </Icon>
);

export default FaceDisappointed;