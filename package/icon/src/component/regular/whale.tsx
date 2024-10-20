
import { Icon } from "../../index";

/**
 * A component that renders the `whale` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/whale?s=regular whale}
 * @preview ![whale](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/whale.svg)
 */
const Whale: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M175.8 13.4c-1-5.9-5.2-10.8-10.9-12.6s-12-.3-16.2 3.9L108 45.4C89.7 63.7 81.4 89.6 85.6 115.1l7.9 47.4L79.2 176.8 43.6 212.4C15.7 240.3 0 278.2 0 317.6C0 407.3 72.7 480 162.4 480L544 480c53 0 96-43 96-96l0-108.3C640 194.1 573.9 128 492.3 128c-80.5 0-158.6 27.4-221.4 77.7L139 311.2c-7.1 5.7-15.9 8.8-25 8.8l-1 0c-19 0-35.2-13.7-38.4-32.5c-1.7-9.9 .6-20.1 6.3-28.4l35.4-51.4 9.1-13.2 47.6 7.9c25.5 4.2 51.5-4.1 69.7-22.3l40.7-40.7c4.2-4.2 5.8-10.5 3.9-16.2s-6.7-9.9-12.6-10.9L189.9 98.1 175.8 13.4zM50.5 341.5C66.4 358 88.7 368 113 368l1 0c20 0 39.4-6.8 55-19.3L300.9 243.1C355.2 199.7 422.7 176 492.3 176c55 0 99.7 44.6 99.7 99.7L592 384c0 26.5-21.5 48-48 48l-381.6 0c-55 0-100.9-38.8-111.9-90.5zM392 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default Whale;