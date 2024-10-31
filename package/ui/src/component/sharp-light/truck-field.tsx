
import { Icon } from "../../index";

/**
 * A component that renders the `truck-field` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field?s=sharp-light truck-field}
 * @preview ![truck-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/truck-field.svg)
 */
const TruckField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 64l0 160 0 32 0 96-101.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64L64 352l0-64 0-160 0-64 288 0zM32 288l0 64-16 0L0 352l0 32 16 0 16 0 32 0c0 53 43 96 96 96s96-43 96-96l96 0 32 0c0 53 43 96 96 96s96-43 96-96l32 0 16 0 16 0 0-32-16 0-16 0 0-96 0-32-32 0-38.6 0L469.9 104.2 465.4 96 456 96l-72 0 0-32 0-32-32 0L64 32 32 32l0 32 0 64L0 128 0 288l32 0zm352-64l0-96 62.6 0 54 96L384 224zm0 128l0-96 143.7 0c.2 0 .4 0 .6 0l47.7 0 0 96-5.5 0c-13.2-37.3-48.7-64-90.5-64s-77.4 26.7-90.5 64l-5.5 0zM96 384a64 64 0 1 1 128 0A64 64 0 1 1 96 384zm384-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </Icon>
);

export default TruckField;