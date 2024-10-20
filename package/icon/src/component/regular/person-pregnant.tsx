
import { Icon } from "../../index";

/**
 * A component that renders the `person-pregnant` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pregnant?s=regular person-pregnant}
 * @preview ![person-pregnant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/person-pregnant.svg)
 */
const PersonPregnant: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M240 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM96 352c0 17.7 14.3 32 32 32l0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 16 0 16 0 0 104c0 13.3 10.7 24 24 24s24-10.7 24-24l0-104 48 0 16 0c17.7 0 32-14.3 32-32l0-32c0-46.8-33.4-85.7-77.7-94.3l-6.1-32.5c-6.8-36.1-37.1-62.7-73.3-65.1c-1-.1-1.9-.2-2.9-.2l-2.4 0L176 128l-4.7 0c-32.5 0-62.3 17.9-77.6 46.5L34.8 284.7c-6.2 11.7-1.8 26.2 9.9 32.5s26.2 1.8 32.5-9.9L96 272.1 96 352zm80-176l13.6 0c15.4 0 28.6 11 31.5 26.1l6.1 32.5c3.6 19.4 18.7 34.5 38.1 38.3c22.1 4.3 38.8 23.8 38.8 47.1l0 16-112 0-48 0 0-128c0-17.7 14.3-32 32-32z" />
    </Icon>
);

export default PersonPregnant;