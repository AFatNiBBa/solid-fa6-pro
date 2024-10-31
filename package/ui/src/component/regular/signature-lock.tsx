
import { Icon } from "../../index";

/**
 * A component that renders the `signature-lock` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-lock?s=regular signature-lock}
 * @preview ![signature-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/signature-lock.svg)
 */
const SignatureLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 128c0-26.5 21.5-48 48-48s48 21.5 48 48l0 7.9c0 27.5-2.3 55-7 82.1L62 251.1C25.1 262.5 0 296.6 0 335.2L0 410c0 38.6 31.3 70 70 70c24.6 0 47.4-12.9 60-34l15.9-26.4c29.6-49.4 51.1-103.3 63.6-159.5l1-4.7 110.8-34.3-23.9 66.8c-2.6 7.4-1.5 15.5 3 21.9s11.8 10.2 19.6 10.2l72.6 0c5.6-9.7 13.7-17.8 23.4-23.4l0-24.6-61.9 0 28.5-79.9c3.1-8.6 1-18.1-5.3-24.7s-15.7-9-24.4-6.3l-133 41.2c2.7-22 4.1-44.2 4.1-66.4l0-7.9c0-53-43-96-96-96s-96 43-96 96l0 40c0 13.3 10.7 24 24 24s24-10.7 24-24l0-40zM208.1 368c-7 16.3-14.8 32.4-23.3 48L384 416l0-48-175.9 0zM76.2 297l80.9-25c-11.7 43.2-29.4 84.5-52.4 123L88.8 421.3C84.8 428 77.7 432 70 432c-12.1 0-22-9.8-22-22l0-74.8c0-17.5 11.4-33 28.2-38.2zM528 240c17.7 0 32 14.3 32 32l0 48-64 0 0-48c0-17.7 14.3-32 32-32zm-80 32l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80z" />
    </Icon>
);

export default SignatureLock;