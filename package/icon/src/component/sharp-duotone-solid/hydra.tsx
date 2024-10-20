
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hydra` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hydra?s=sharp-duotone-solid hydra}
 * @preview ![hydra](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hydra.svg)
 */
const Hydra: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 208.6L0 256l32 0 64 0 0 64c0 59.6 40.8 109.8 96 124l0 68 96 0 10.7-64 74.7 0L384 512l96 0 0-64 32 0c70.7 0 128-57.3 128-128c0-40.3-19-78.2-51.2-102.4l-25.6-19.2-45.4 44 33.1 47.2c18.4 26.3-.4 62.4-32.5 62.4c-13.3 0-25.6-6.6-33-17.7l-10.7-16.1C448.7 279.4 405.1 256 358.4 256l-9.4 0-5.3 0c-5.6 0-11.1-.5-16.4-1.5c-32-6.1-57.9-29.5-67.4-59.7c-2.4-7.6-3.7-15.7-3.9-24c0-.5 0-.9 0-1.4l0-.6 0-4.5 0-1.3 0-34.9 0-16 0-28.8C256 37.2 218.8 0 172.8 0L168 0 156.8 0 148 7 108 39 96 48.6 96 96l32 0 32 0 16 0 16 0 0 16 0 16 0 .4 0 .4L184.3 283l20.5 27.4 9.6 12.8-25.6 19.2-9.6-12.8-24-32-3.5-4.6 .3-5.8 3.7-73.2c-10.8-31.4-40.6-54-75.7-54l-8 0-11.2 0L52 167 12 199 0 208.6z" />
        <path d="M327.3 254.5L346.2 160l69.8 0 32 0 0-47.4L436 103 396 71l-8.8-7L376 64l-7.1 0c-43.3 0-81.2 29-92.6 70.7l-16.4 60c9.5 30.2 35.5 53.6 67.4 59.7z" />
    </Icon>
);

export default Hydra;