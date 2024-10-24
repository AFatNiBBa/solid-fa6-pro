
import { Icon } from "../../index";

/**
 * A component that renders the `function` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/function?s=sharp-light function}
 * @preview ![function](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/function.svg)
 */
const Function: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 0L96 0 208 0l16 0 0 32-16 0-96 0 0 160 64 0 16 0 0 32-16 0-64 0 0 240 0 16-16 0-80 0L0 480l0-32 16 0 64 0 0-224-64 0L0 224l0-32 16 0 64 0L80 16 80 0zM256 320c0 59.1 16.8 113.9 45.5 159.5l-27.1 17.1C242.5 445.9 224 385.2 224 320s18.5-125.9 50.5-176.5l27.1 17.1C272.8 206.1 256 260.9 256 320zm352 0c0-59.1-16.8-113.9-45.5-159.5l27.1-17.1C621.5 194.1 640 254.8 640 320s-18.5 125.9-50.5 176.5l-27.1-17.1C591.2 433.9 608 379.1 608 320zM379.3 244.7L432 297.4l52.7-52.7L496 233.4 518.6 256l-11.3 11.3L454.6 320l52.7 52.7L518.6 384 496 406.6l-11.3-11.3L432 342.6l-52.7 52.7L368 406.6 345.4 384l11.3-11.3L409.4 320l-52.7-52.7L345.4 256 368 233.4l11.3 11.3z" />
    </Icon>
);

export default Function;