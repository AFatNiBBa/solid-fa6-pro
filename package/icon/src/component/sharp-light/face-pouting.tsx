
import { Icon } from "../../index";

/**
 * A component that renders the `face-pouting` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pouting?s=sharp-light face-pouting}
 * @preview ![face-pouting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-pouting.svg)
 */
const FacePouting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm107.2-93.6l-4.2-28c-7.4-49.3-51-86.5-103-86.5s-95.6 37.1-103 86.4l-4.2 28L175 407.5c23.7-9.8 51.3-15.5 81-15.5c29.7 0 57.4 5.7 81.1 15.6l26.1 10.9zm-46.9-51.2c-19-4.7-39.3-7.2-60.3-7.2c-21 0-41.3 2.5-60.3 7.2C208.5 348.5 230.6 336 256 336s47.5 12.5 60.3 31.2zM176.4 264c13.3 0 24-10.7 24-24c0-2.6-.4-5.1-1.2-7.4l19.7 6.6 15.2 5.1 10.1-30.4-15.2-5.1-96-32-15.2-5.1-10.1 30.4 15.2 5.1 39.6 13.2c-6.2 4.3-10.2 11.5-10.2 19.6c0 13.3 10.7 24 24 24zm184-24c0-8.2-4.1-15.5-10.4-19.8l39.1-13 15.2-5.1-10.1-30.4-15.2 5.1-96 32-15.2 5.1 10.1 30.4 15.2-5.1 20.6-6.9c-.8 2.4-1.3 5-1.3 7.7c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default FacePouting;