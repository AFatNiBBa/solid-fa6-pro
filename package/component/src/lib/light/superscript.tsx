
import { Icon } from "../../index";

/**
 * A component that renders the `superscript` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=light superscript}
 * @preview ![superscript](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/superscript.svg)
 */
const Superscript: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 16c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9L432 160l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0 0-144zM16 64C7.2 64 0 71.2 0 80s7.2 16 16 16l39.2 0L157 256 55.2 416 16 416c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0c5.5 0 10.6-2.8 13.5-7.4L176 285.8l98.5 154.8c2.9 4.6 8 7.4 13.5 7.4l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-39.2 0L195 256 296.8 96 336 96c8.8 0 16-7.2 16-16s-7.2-16-16-16l-48 0c-5.5 0-10.6 2.8-13.5 7.4L176 226.2 77.5 71.4C74.6 66.8 69.5 64 64 64L16 64z" />
    </Icon>
);

export default Superscript;