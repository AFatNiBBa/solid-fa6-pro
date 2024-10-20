
import { Icon } from "../../index";

/**
 * A component that renders the `pen-circle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-circle?s=light pen-circle}
 * @preview ![pen-circle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pen-circle.svg)
 */
const PenCircle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm331.5-92.7c-6.2-6.2-16.4-6.2-22.6 0l-21.4 21.4 40 40 21.4-21.4c6.2-6.2 6.2-16.4 0-22.6l-17.4-17.4zm-149 126.4c-2.1 2.1-3.5 4.6-4.2 7.4l-12.3 49 49-12.3c2.8-.7 5.4-2.2 7.4-4.2l82.3-82.3-40-40-82.3 82.3zm103.8-149c18.7-18.7 49.1-18.7 67.9 0l17.4 17.4c18.7 18.7 18.7 49.1 0 67.9L245.1 352.3c-6.2 6.2-13.9 10.5-22.3 12.6l-74.9 18.7c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l18.7-74.9c2.1-8.4 6.5-16.1 12.6-22.3L286.2 140.7z" />
    </Icon>
);

export default PenCircle;