
import { Icon } from "../../index";

/**
 * A component that renders the `message-medical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-medical?s=light message-medical}
 * @preview ![message-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-medical.svg)
 */
const MessageMedical: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM240 96c-17.7 0-32 14.3-32 32l0 32-32 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l32 0 0 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32-14.3 32-32l0-32 32 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-32 0 0-32c0-17.7-14.3-32-32-32l-32 0zm0 32l32 0 0 48c0 8.8 7.2 16 16 16l48 0 0 32-48 0c-8.8 0-16 7.2-16 16l0 48-32 0 0-48c0-8.8-7.2-16-16-16l-48 0 0-32 48 0c4.2 0 8.3-1.7 11.3-4.7s4.7-7.1 4.7-11.3l0-48z" />
    </Icon>
);

export default MessageMedical;