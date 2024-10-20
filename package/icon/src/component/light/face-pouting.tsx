
import { Icon } from "../../index";

/**
 * A component that renders the `face-pouting` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-pouting?s=light face-pouting}
 * @preview ![face-pouting](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/face-pouting.svg)
 */
const FacePouting: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm85.3-102.7c4.5-3.5 8.4-8.6 10-15.1c1.6-6.7 .5-13.5-2.7-19.5C331.2 342 296.1 320 256 320c-40.1 0-75.1 22-92.5 54.7c-3.2 6-4.3 12.8-2.7 19.5c1.6 6.5 5.4 11.6 10 15.1c8.8 6.8 21.2 8.7 32.4 4.5c16.2-6.1 34-9.4 52.9-9.4c18.9 0 36.7 3.4 52.9 9.4c11.2 4.2 23.6 2.4 32.4-4.5zm-25.7-27.1c-18.5-6.4-38.6-9.9-59.6-9.9c-20.9 0-41 3.5-59.6 9.8C209.4 364 231.1 352 256 352s46.7 12.1 59.6 30.2zM176.4 264c13.3 0 24-10.7 24-24c0-2.6-.4-5.1-1.2-7.4l19.7 6.6c8.4 2.8 17.4-1.7 20.2-10.1s-1.7-17.4-10.1-20.2l-96-32c-8.4-2.8-17.4 1.7-20.2 10.1s1.7 17.4 10.1 20.2l39.6 13.2c-6.2 4.3-10.2 11.5-10.2 19.6c0 13.3 10.7 24 24 24zm184-24c0-8.2-4.1-15.5-10.4-19.8l39.1-13c8.4-2.8 12.9-11.9 10.1-20.2s-11.9-12.9-20.2-10.1l-96 32c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l20.6-6.9c-.8 2.4-1.3 5-1.3 7.7c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default FacePouting;