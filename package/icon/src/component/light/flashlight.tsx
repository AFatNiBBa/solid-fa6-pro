
import { Icon } from "../../index";

/**
 * A component that renders the `flashlight` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/flashlight?s=light flashlight}
 * @preview ![flashlight](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/flashlight.svg)
 */
const Flashlight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M401.8 325.4l31.5 21c24 16 50.8 27.1 78.7 32.9l0-246.7c-28 5.8-54.7 16.9-78.7 32.9l-31.5 21-8.1 5.4-9.7 0L48 192c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l336 0 9.7 0 8.1 5.4zM544 383.6c4.5 .3 9 .4 13.5 .4l34.5 0c8.8 0 16-7.2 16-16l0-224c0-8.8-7.2-16-16-16l-34.5 0c-4.5 0-9 .1-13.5 .4l0 255.2zM0 304l0-96c0-26.5 21.5-48 48-48l336 0 31.5-21c42.1-28 91.5-43 142-43L592 96c26.5 0 48 21.5 48 48l0 224c0 26.5-21.5 48-48 48l-34.5 0c-50.5 0-100-15-142-43L384 352 48 352c-26.5 0-48-21.5-48-48zm224-48c0-8.8 7.2-16 16-16l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16z" />
    </Icon>
);

export default Flashlight;