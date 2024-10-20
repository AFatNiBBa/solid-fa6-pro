
import { Icon } from "../../index";

/**
 * A component that renders the `face-awesome` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-awesome?s=sharp-light face-awesome}
 * @preview ![face-awesome](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/face-awesome.svg)
 */
const FaceAwesome: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 208l-80 0 0-16c0-22.1 17.9-40 40-40c.5 0 .9 0 1.4 0c-.9 2.5-1.4 5.2-1.4 8c0 13.3 10.7 24 24 24c5.2 0 10.1-1.7 14-4.5c1.3 3.9 2 8.1 2 12.5l0 16zm-40-88c-39.8 0-72 32.2-72 72l0 16 0 32 32 0 80 0 32 0 0-32 0-16c0-39.8-32.2-72-72-72zm236.1 53.1c2.5 5.8 3.9 12.2 3.9 18.9l0 16-96 0 0-16c0-26.5 21.5-48 48-48c2 0 3.9 .1 5.8 .3c-3.6 4.2-5.8 9.7-5.8 15.7c0 13.3 10.7 24 24 24c8.4 0 15.8-4.3 20.1-10.9zM256 192l0 16 0 32 32 0 96 0 32 0 0-32 0-16c0-44.2-35.8-80-80-80s-80 35.8-80 80zm-8 224c-2 0-4 0-6-.1c7.1-27.5 32.2-47.9 62-47.9c14.3 0 27.5 4.7 38.2 12.6C316.9 402.7 283.9 416 248 416zm115.9-59c-16.4-13.1-37.2-21-59.9-21c-45.8 0-84.1 32.1-93.7 75c-50.7-13.8-90.5-54.8-102.1-107l279.6 0c-4.3 19.5-12.6 37.4-23.9 53zm12.3 35.3c22.4-24 38.1-54.3 44.2-88.2c.9-5 1.6-10.2 2.1-15.3L424 272l-32.1 0-287.7 0L72 272l1.5 16.7c.5 5.2 1.2 10.3 2.1 15.3c14.9 82.6 87 144 172.4 144l7.7 0c48 0 91.4-21.5 120.5-55.8z" />
    </Icon>
);

export default FaceAwesome;