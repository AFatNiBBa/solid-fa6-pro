
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-weary` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-weary?s=sharp-duotone-solid face-weary}
 * @preview ![face-weary](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-weary.svg)
 */
const FaceWeary: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm93.6-45.2l15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4c3.8-3.8 7.5-7.5 11.3-11.3L222.6 176c-3.8 3.8-7.5 7.5-11.3 11.3c-2.5 2.5-4.9 4.9-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4c-5.3 .9-10.5 1.8-15.8 2.6c-1.8-10.5-3.5-21-5.3-31.6zM128 416c0-70.7 57.3-128 128-128s128 57.3 128 128c0 4.2-.2 8.3-.6 12.3C349.5 400.8 304.9 384 256 384s-93.5 16.8-127.4 44.3c-.4-4.1-.6-8.2-.6-12.3zM289.4 176L312 153.4c3.8 3.8 7.5 7.5 11.3 11.3c2.5 2.5 4.9 4.9 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7c.8 .1 1.7 .3 2.5 .4c5.3 .9 10.5 1.8 15.8 2.6c-1.8 10.5-3.5 21-5.3 31.6c-5.3-.9-10.5-1.8-15.8-2.6c-.8-.1-1.7-.3-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7c-2.5-2.5-4.9-4.9-7.4-7.4c-3.8-3.8-7.5-7.5-11.3-11.3z" />
        <path d="M211.3 187.3l-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 153.4 222.6 176l-11.3 11.3zm89.4 0L289.4 176 312 153.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4z" />
    </Icon>
);

export default FaceWeary;