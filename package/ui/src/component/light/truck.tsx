
import { Icon } from "../../index";

/**
 * A component that renders the `truck` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck?s=light truck}
 * @preview ![truck](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/truck.svg)
 */
const Truck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 32C46.3 32 32 46.3 32 64l0 288c0 17.7 14.3 32 32 32l5.5 0c13.2-37.3 48.7-64 90.5-64s77.4 26.7 90.5 64L384 384l0-320c0-17.7-14.3-32-32-32L64 32zm0 384c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 32 65.3 0c14 0 27.3 6.1 36.4 16.8l78.7 91.8c7.5 8.7 11.6 19.8 11.6 31.2L608 384l16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-48 0c0 53-43 96-96 96s-96-43-96-96l-128 0c0 53-43 96-96 96s-96-43-96-96zM416 224l154.9 0-77.5-90.4c-3-3.5-7.5-5.6-12.1-5.6L416 128l0 96zm0 32l0 88.4c17-15.2 39.4-24.4 64-24.4c41.8 0 77.4 26.7 90.5 64l5.5 0 0-128-160 0zM224 416A64 64 0 1 0 96 416a64 64 0 1 0 128 0zm256 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Truck;