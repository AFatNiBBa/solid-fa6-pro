
import { Icon } from "../../index";

/**
 * A component that renders the `face-persevering` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-persevering?s=sharp-solid face-persevering}
 * @preview ![face-persevering](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-persevering.svg)
 */
const FacePersevering: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm60.1-101.3c-11.7-13-31.6-26.7-60.1-26.7s-48.4 13.7-60.1 26.7l-10.7 11.9-23.8-21.4 10.7-11.9C188.2 371.4 216.3 352 256 352s67.8 19.4 83.9 37.3l10.7 11.9-23.8 21.4-10.7-11.9zM222.6 112l-11.3 11.3-7.4 7.4c-23.6 23.6-53.9 39.2-86.8 44.7l-2.5 .4-15.8 2.6-5.3-31.6 15.8-2.6 2.5-.4c26.3-4.4 50.6-16.9 69.5-35.7l7.4-7.4L200 89.4 222.6 112zm78.1 11.3L289.4 112 312 89.4l11.3 11.3 7.4 7.4c18.9 18.9 43.2 31.4 69.5 35.7l2.5 .4 15.8 2.6-5.3 31.6-15.8-2.6-2.5-.4c-32.9-5.5-63.3-21.1-86.8-44.7l-7.4-7.4zM112 208l118.9 64L112 336l45.7-64L112 208zm169.1 64L400 208l-45.7 64L400 336 281.1 272z" />
    </Icon>
);

export default FacePersevering;