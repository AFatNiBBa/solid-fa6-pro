
import { Icon } from "../../index";

/**
 * A component that renders the `x-ray` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/x-ray?s=light x-ray}
 * @preview ![x-ray](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/x-ray.svg)
 */
const XRay: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 48c0-8.8 7.2-16 16-16l32 0 416 0 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-16 0 0 384 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0L48 480l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l16 0L32 64 16 64C7.2 64 0 56.8 0 48zM64 64l0 384 384 0 0-384L64 64zM256 96c8.8 0 16 7.2 16 16l0 32 64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0 0 32 96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0 0 53.5 45.1-17.4c7-2.7 14.4-4.1 21.9-4.1l2.2 0c32.5 0 58.8 26.3 58.8 58.8c0 13.2-4.4 25.9-12.5 36.3l-18.2 23.2c-12.7 16.2-32.2 25.7-52.9 25.7l-120.8 0c-20.6 0-40.1-9.5-52.9-25.7l-18.2-23.2C116.4 356.8 112 344 112 330.8c0-32.5 26.3-58.8 58.8-58.8l2.1 0c7.5 0 14.9 1.4 21.9 4.1L240 293.5l0-53.5-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l96 0 0-32-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0 0-32c0-8.8 7.2-16 16-16zM144 330.8c0 6 2 11.8 5.7 16.5l18.2 23.2c6.7 8.5 16.9 13.5 27.7 13.5l120.8 0c10.8 0 21-5 27.7-13.5l18.2-23.2c3.7-4.7 5.7-10.5 5.7-16.5c0-14.8-12-26.8-26.8-26.8l-2.2 0c-3.6 0-7.1 .7-10.4 1.9l-55.3 21.3c-11.1 4.3-23.4 4.3-34.5 0l-55.3-21.3c-3.3-1.3-6.9-1.9-10.4-1.9l-2.1 0C156 304 144 316 144 330.8zM192 352a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm112-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default XRay;