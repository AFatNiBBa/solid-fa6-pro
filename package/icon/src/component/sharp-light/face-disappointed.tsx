
import { Icon } from "../../index";

/**
 * A component that renders the `face-disappointed` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-disappointed?s=sharp-light face-disappointed}
 * @preview ![face-disappointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-disappointed.svg)
 */
const FaceDisappointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM316.1 410.7c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7l-10.7 11.9-23.8-21.4 10.7-11.9C188.2 371.4 216.3 352 256 352s67.8 19.4 83.9 37.3l10.7 11.9-23.8 21.4-10.7-11.9zM222.6 256l-11.3 11.3-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 233.4 222.6 256zm78.1 11.3L289.4 256 312 233.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z" />
    </Icon>
);

export default FaceDisappointed;