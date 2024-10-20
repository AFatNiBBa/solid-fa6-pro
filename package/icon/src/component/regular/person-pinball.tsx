
import { Icon } from "../../index";

/**
 * A component that renders the `person-pinball` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pinball?s=regular person-pinball}
 * @preview ![person-pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-pinball.svg)
 */
const PersonPinball: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M80 96A48 48 0 1 0 80 0a48 48 0 1 0 0 96zM48 186.2c0-5.6 4.6-10.2 10.2-10.2c4.9 0 9.7 1.3 13.8 3.7l0 120.1L50.6 279.9c-1.6-1.5-2.6-3.6-2.6-5.9l0-87.8zm72 158.2l0-88 6.5 11.5c7.1 12.5 20.4 20.2 34.7 20.2l30.7 0 0 88 0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-88 352 0 0 88c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112 0-168 0-184c0-13.3-10.7-24-24-24L504 0c-13.3 0-24 10.7-24 24l0 42c0 6.9 1.3 13.8 3.8 20.3l44 113.2L251 249.3c-4.4-5.7-11.3-9.3-19-9.3l-66.1 0-42.3-74c-13.4-23.5-38.4-38-65.4-38C26.1 128 0 154.1 0 186.2L0 274c0 15.6 6.5 30.4 17.9 41L112 402.5l0 85.5c0 13.3 10.7 24 24 24s24-10.7 24-24l0-89c0-11.1-4.6-21.7-12.8-29.3L120 344.4zM592 352l-352 0 0-51.9 32.1-5.8c0 .6-.1 1.1-.1 1.7c0 13.3 10.7 24 24 24s24-10.7 24-24c0-3.5-.8-6.9-2.2-9.9L592 236.7 592 352zM48 386.7L0 342.1 0 488c0 13.3 10.7 24 24 24s24-10.7 24-24l0-101.3zM528 66l0-18 64 0 0 139.2-16.5 2.4L528.5 68.9c-.4-.9-.5-1.9-.5-2.9z" />
    </Icon>
);

export default PersonPinball;