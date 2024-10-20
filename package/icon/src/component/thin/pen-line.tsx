
import { Icon } from "../../index";

/**
 * A component that renders the `pen-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-line?s=thin pen-line}
 * @preview ![pen-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pen-line.svg)
 */
const PenLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M440.2 25.9c-12.5-12.5-32.8-12.5-45.3 0L328.1 92.8l91.1 91.1L486.1 117c12.5-12.5 12.5-32.8 0-45.3L440.2 25.9zM73.6 347.3c-10.4 10.4-18 23.3-22.2 37.4L19.8 492.2l107.5-31.6c14.1-4.2 27-11.8 37.4-22.2L407.9 195.2l-91.1-91.1L73.6 347.3zm310-332.7c18.7-18.7 49.1-18.7 67.9 0l45.8 45.8c18.7 18.7 18.7 49.1 0 67.9L176 449.7c-12.3 12.3-27.5 21.3-44.2 26.2L10.3 511.7c-2.8 .8-5.8 .1-7.9-2s-2.8-5.1-2-7.9L36.1 380.2C41 363.5 50 348.3 62.3 336L383.7 14.6zM232 496l336 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-336 0c-4.4 0-8-3.6-8-8s3.6-8 8-8z" />
    </Icon>
);

export default PenLine;