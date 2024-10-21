
import { Icon } from "../../index";

/**
 * A component that renders the `wind-warning` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wind-warning?s=light wind-warning}
 * @preview ![wind-warning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/wind-warning.svg)
 */
const WindWarning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M390.3 352c-33.2 57.4-95.2 96-166.3 96C118 448 32 362 32 256S118 64 224 64s192 86 192 192l32 0C448 132.3 347.7 32 224 32S0 132.3 0 256S100.3 480 224 480c89.4 0 166.5-52.3 202.4-128l-36.1 0zM224 128c-8.8 0-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128c0-8.8-7.2-16-16-16zm24 224a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM496 480l48 0c53 0 96-43 96-96s-43-96-96-96l-208 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l208 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16zm48-256c53 0 96-43 96-96s-43-96-96-96l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0c35.3 0 64 28.7 64 64s-28.7 64-64 64l-72.1 0c2.7 10.4 4.7 21.1 6.1 32l66 0z" />
    </Icon>
);

export default WindWarning;