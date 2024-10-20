
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=regular signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 128c0-26.5 21.5-48 48-48s48 21.5 48 48l0 7.9c0 27.5-2.3 55-7 82.1L158 251.1c-36.9 11.4-62 45.5-62 84.1L96 410c0 38.6 31.3 70 70 70c24.6 0 47.4-12.9 60-34l15.9-26.4c29.6-49.4 51.1-103.3 63.6-159.5l1-4.7 110.8-34.3-23.9 66.8c-2.6 7.4-1.5 15.5 3 21.9s11.8 10.2 19.6 10.2l136 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-101.9 0 28.5-79.9c3.1-8.6 1-18.1-5.3-24.7s-15.7-9-24.4-6.3l-133 41.2c2.7-22 4.1-44.2 4.1-66.4l0-7.9c0-53-43-96-96-96s-96 43-96 96l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zm-3.8 169l80.9-25c-11.7 43.2-29.4 84.5-52.4 123l-15.9 26.4c-4 6.6-11.1 10.7-18.8 10.7c-12.1 0-22-9.8-22-22l0-74.8c0-17.5 11.4-33 28.2-38.2zM64 368l-40 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l40.2 0c-.1-2-.2-4-.2-6l0-42zm216.8 48L616 416c13.3 0 24-10.7 24-24s-10.7-24-24-24l-311.9 0c-7 16.3-14.8 32.4-23.3 48z" />
    </Icon>
);

export default Signature;