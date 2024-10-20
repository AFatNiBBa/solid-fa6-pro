
import { Icon } from "../../index";

/**
 * A component that renders the `square-pen` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-pen?s=light square-pen}
 * @preview ![square-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-pen.svg)
 */
const SquarePen: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm299.5 67.3c-6.2-6.2-16.4-6.2-22.6 0l-21.4 21.4 40 40 21.4-21.4c6.2-6.2 6.2-16.4 0-22.6l-17.4-17.4zm-149 126.4c-2.1 2.1-3.5 4.6-4.2 7.4l-12.3 49 49-12.3c2.8-.7 5.4-2.2 7.4-4.2l82.3-82.3-40-40-82.3 82.3zm103.8-149c18.7-18.7 49.1-18.7 67.9 0l17.4 17.4c18.7 18.7 18.7 49.1 0 67.9L213.1 352.3c-6.2 6.2-13.9 10.5-22.3 12.6l-74.9 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.9c2.1-8.4 6.5-16.1 12.6-22.3L254.2 140.7z" />
    </Icon>
);

export default SquarePen;