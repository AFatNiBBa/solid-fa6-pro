
import { Icon } from "../../index";

/**
 * A component that renders the `face-dizzy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-dizzy?s=sharp-solid face-dizzy}
 * @preview ![face-dizzy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-dizzy.svg)
 */
const FaceDizzy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm320 96a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zM123.3 132.7L112 121.4 89.4 144l11.3 11.3L137.4 192l-36.7 36.7L89.4 240 112 262.6l11.3-11.3L160 214.6l36.7 36.7L208 262.6 230.6 240l-11.3-11.3L182.6 192l36.7-36.7L230.6 144 208 121.4l-11.3 11.3L160 169.4l-36.7-36.7zm192 0L304 121.4 281.4 144l11.3 11.3L329.4 192l-36.7 36.7L281.4 240 304 262.6l11.3-11.3L352 214.6l36.7 36.7L400 262.6 422.6 240l-11.3-11.3L374.6 192l36.7-36.7L422.6 144 400 121.4l-11.3 11.3L352 169.4l-36.7-36.7z" />
    </Icon>
);

export default FaceDizzy;