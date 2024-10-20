
import { Icon } from "../../index";

/**
 * A component that renders the `face-weary` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-weary?s=sharp-regular face-weary}
 * @preview ![face-weary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/face-weary.svg)
 */
const FaceWeary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM256 368c-41.8 0-80.5 12.2-112 33l0-1c0-61.9 50.1-112 112-112s112 50.1 112 112l0 1c-31.5-20.8-70.2-33-112-33zM222.6 176l-11.3 11.3-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 153.4 222.6 176zm78.1 11.3L289.4 176 312 153.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z" />
    </Icon>
);

export default FaceWeary;