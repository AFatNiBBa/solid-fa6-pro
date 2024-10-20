
import { Icon } from "../../index";

/**
 * A component that renders the `hamsa` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hamsa?s=regular hamsa}
 * @preview ![hamsa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hamsa.svg)
 */
const Hamsa: typeof Icon = x => (
    <Icon {...x}>
        <path d="M184 104l0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96 0-32c0-13.3 10.7-24 24-24s24 10.7 24 24l0 32 0 96c0 13.3 10.7 24 24 24s24-10.7 24-24l0-96c0-13.3 10.7-24 24-24s24 10.7 24 24l0 176c0 13.3 10.7 24 24 24l48.4 0c8.6 0 15.6 7 15.6 15.6c0 4.1-1.6 8.1-4.6 11l-83.8 83.8C343.9 446.2 300.9 464 256 464s-87.9-17.8-119.6-49.5L52.6 330.6c-2.9-2.9-4.6-6.9-4.6-11C48 311 55 304 63.6 304l48.4 0c13.3 0 24-10.7 24-24l0-176c0-13.3 10.7-24 24-24s24 10.7 24 24zm7.8-64.6C182.2 34.7 171.4 32 160 32c-39.8 0-72 32.2-72 72l0 152-24.4 0C28.5 256 0 284.5 0 319.6c0 16.9 6.7 33 18.6 45l83.8 83.8c40.7 40.7 96 63.6 153.5 63.6s112.8-22.9 153.5-63.6l83.8-83.8c11.9-11.9 18.6-28.1 18.6-45c0-35.1-28.5-63.6-63.6-63.6L424 256l0-152c0-39.8-32.2-72-72-72c-11.4 0-22.2 2.7-31.8 7.4C308.3 16 284 0 256 0s-52.3 16-64.2 39.4zM165.4 338.2c-3.6 3.7-5.4 8.7-5.4 13.8s1.8 10.1 5.4 13.8C179.2 380.2 217.6 416 256 416s76.8-35.8 90.6-50.2c3.6-3.7 5.4-8.7 5.4-13.8s-1.8-10.1-5.4-13.8C332.8 323.8 294.4 288 256 288s-76.8 35.8-90.6 50.2zM256 320a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default Hamsa;