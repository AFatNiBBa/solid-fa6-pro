
import { Icon } from "../../index";

/**
 * A component that renders the `clipboard-question` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-question?s=sharp-light clipboard-question}
 * @preview ![clipboard-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clipboard-question.svg)
 */
const ClipboardQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M145.5 68c5.3-20.7 24.1-36 46.5-36s41.2 15.3 46.5 36l3.1 12L254 80l34 0 0 48-96 0-96 0 0-48 34 0 12.4 0 3.1-12zM192 0c-32.8 0-61 19.8-73.3 48L80 48 64 48l0 16 0 16L32 80 0 80l0 32L0 480l0 32 32 0 320 0 32 0 0-32 0-368 0-32-32 0-32 0 0-16 0-16-16 0-38.7 0C253 19.8 224.8 0 192 0zM320 144l0-32 32 0 0 368L32 480l0-368 32 0 0 32 0 16 16 0 112 0 112 0 16 0 0-16zM208 80a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM104 248l0 8 32 0 0-8c0-13.3 10.7-24 24-24l56 0c17.6 0 32 14.5 32 32.3c0 12.1-6.8 23.2-17.5 28.7l-45.8 23.4-8.7 4.5 0 9.8 0 13.5 0 16 32 0 0-16 0-3.7 37.1-18.9c21.5-11 34.9-33.2 34.9-57.2c0-35.2-28.5-64.3-64-64.3l-56 0c-30.9 0-56 25.1-56 56zm64 136l0 48 48 0 0-48-48 0z" />
    </Icon>
);

export default ClipboardQuestion;