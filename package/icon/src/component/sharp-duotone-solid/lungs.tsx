
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lungs` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lungs?s=sharp-duotone-solid lungs}
 * @preview ![lungs](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lungs.svg)
 */
const Lungs: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M.2 412c-.2 1.3-.2 2.6-.2 4l0 7c0 49.1 39.8 89 89 89c7.3 0 14.5-.9 21.6-2.7L256 473l0-186.3L161.2 347c-9 5.7-18 11.5-27 17.2c-11.5-18-22.9-36-34.4-54l27-17.2c43.1-27.4 86.1-54.8 129.2-82.2L256 96 152 96c-26.9 35.8-51.5 73.2-73.8 112.1C45.8 264.9 9.1 341.4 .2 412zM384 96l0 114.8c43.1 27.4 86.1 54.8 129.2 82.2l27 17.2-34.4 54-27-17.2c-31.6-20.1-63.2-40.2-94.8-60.3L384 473l145.4 36.4c7.1 1.8 14.3 2.7 21.6 2.7c49.1 0 89-39.8 89-89l0-7c0-1.3-.1-2.7-.2-4c-8.8-70.6-45.5-147.2-78-203.9c-16.5-28.9-32.4-53.6-44.3-71.1c-9.5-14-19.4-27.6-29.5-41.1L384 96z" />
        <path d="M352 0l0 32 0 32 0 126.4L513.2 293l27 17.2-34.4 54-27-17.2L320 245.9 161.2 347l-27 17.2-34.4-54 27-17.2L288 190.4 288 64l0-32 0-32 64 0z" />
    </Icon>
);

export default Lungs;