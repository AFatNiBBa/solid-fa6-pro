
import { Icon } from "../../index";

/**
 * A component that renders the `music` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/music?s=thin music}
 * @preview ![music](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/music.svg)
 */
const Music: typeof Icon = x => (
    <Icon {...x}>
        <path d="M197.6 108.2c-3.4 1-5.6 4.1-5.6 7.6l0 99.8 304-93.5 0-105.7L197.6 108.2zM512 15l0 112.9 0 .4L512 368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c33.4 0 62.8 14.2 80 35.8l0-184.9L194.4 231.6c-.8 .2-1.6 .4-2.4 .4l0 200c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c33.4 0 62.8 14.2 80 35.8L176 224l0-108.2c0-10.5 6.9-19.8 16.9-22.9L492.6 .7c1.4-.4 2.9-.7 4.4-.7c8.3 0 15 6.7 15 15zM176 432c0-32.7-33-64-80-64s-80 31.3-80 64s33 64 80 64s80-31.3 80-64zm320-64c0-32.7-33-64-80-64s-80 31.3-80 64s33 64 80 64s80-31.3 80-64z" />
    </Icon>
);

export default Music;