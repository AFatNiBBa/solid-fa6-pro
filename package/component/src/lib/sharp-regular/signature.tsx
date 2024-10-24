
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=sharp-regular signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 128c0-26.5 21.5-48 48-48s48 21.5 48 48l0 7.9c0 27.5-2.3 55-7 82.1L112.9 265.1 96 270.3 96 288l0 168 0 24 24 0 72 0 13.6 0 7-11.7 29.3-48.8c29.6-49.4 51.1-103.3 63.6-159.5l1-4.7 110.8-34.3-23.9 66.8L381.9 320l34.1 0 136 0 24 0 0-48-24 0-101.9 0 28.5-79.9 16.1-45.2-45.8 14.2-133 41.2c2.7-22 4.1-44.2 4.1-66.4l0-7.9c0-53-43-96-96-96s-96 43-96 96l0 40 0 24 48 0 0-24 0-40zM144 305.7l109.1-33.8c-11.7 43.2-29.4 84.5-52.4 123L178.4 432 144 432l0-126.3zM64 368l-40 0L0 368l0 48 24 0 40 0 0-48zm216.8 48L616 416l24 0 0-48-24 0-311.9 0c-7 16.3-14.8 32.4-23.3 48z" />
    </Icon>
);

export default Signature;