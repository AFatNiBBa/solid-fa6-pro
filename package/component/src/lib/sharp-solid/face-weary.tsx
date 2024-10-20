
import { Icon } from "../../index";

/**
 * A component that renders the `face-weary` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-weary?s=sharp-solid face-weary}
 * @preview ![face-weary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-weary.svg)
 */
const FaceWeary: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM211.3 187.3l-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 153.4 222.6 176l-11.3 11.3zM289.4 176L312 153.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4L289.4 176zM256 384c-48.9 0-93.5 16.8-127.4 44.3c-.4-4.1-.6-8.2-.6-12.3c0-70.7 57.3-128 128-128s128 57.3 128 128c0 4.2-.2 8.3-.6 12.3C349.5 400.8 304.9 384 256 384z" />
    </Icon>
);

export default FaceWeary;