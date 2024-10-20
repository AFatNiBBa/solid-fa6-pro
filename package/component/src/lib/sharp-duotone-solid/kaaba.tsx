
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=sharp-duotone-solid kaaba}
 * @preview ![kaaba](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kaaba.svg)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 223.1l0 33.7c21.3 7.1 42.7 14.2 64 21.3c0-11.2 0-22.5 0-33.7c-19.6-6.5-39.3-13.1-58.9-19.6L0 223.1zM79.8 120L288 189.4c69.4-23.1 138.8-46.3 208.2-69.4C426.8 96.9 357.4 73.7 288 50.6C218.6 73.7 149.2 96.9 79.8 120zM96 255.1c0 11.2 0 22.5 0 33.7l96 32c0-11.2 0-22.5 0-33.7c-32-10.7-64-21.3-96-32zm128 42.7c0 11.2 0 22.5 0 33.7l58.9 19.6c1.7 .6 3.4 1.1 5.1 1.7c1.7-.6 3.4-1.1 5.1-1.7c19.6-6.5 39.3-13.1 58.9-19.6l0-33.7-64 21.3-64-21.3zm160-10.7l0 33.7 96-32 0-33.7-96 32zm128-42.7l0 33.7 64-21.3 0-33.7c-1.7 .6-3.4 1.1-5.1 1.7L512 244.5z" />
        <path d="M288 0L0 96l0 32 0 15.1 0 .9 288 96 288-96 0-.9 0-15.1 0-32L288 0zm0 189.4L79.8 120 288 50.6 496.2 120 288 189.4zM0 176.9l0 46.3 5.1 1.7L64 244.5l0 33.7L0 256.9 0 416l288 96 288-96 0-159.1-64 21.3 0-33.7 58.9-19.6 5.1-1.7 0-46.3L293.1 271.2l-5.1 1.7-5.1-1.7L0 176.9zm96 112l0-33.7 96 32 0 33.7-96-32zm128 42.7l0-33.7 64 21.3 64-21.3 0 33.7-58.9 19.6-5.1 1.7-5.1-1.7L224 331.5zm160-44.4l96-32 0 33.7-96 32 0-33.7z" />
    </Icon>
);

export default Kaaba;