
import { Icon } from "../../index";

/**
 * A component that renders the `face-worried` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-worried?s=sharp-solid face-worried}
 * @preview ![face-worried](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/face-worried.svg)
 */
const FaceWorried: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm-.4-112c-38.7 0-74.5 11.4-103.6 30.6c4.7-53 49.3-94.6 103.6-94.6s98.8 41.6 103.6 94.6C330.1 411.4 294.3 400 255.6 400zM144.4 272a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM192 160c-4.4 0-8.8 .3-13 .9c-21.2 2.8-40.6 12.4-56.1 26.8l-11.7 10.9L89.4 175.2l11.7-10.9c20.1-18.7 45.5-31.5 73.7-35.2c5.6-.7 11.4-1.1 17.2-1.1l16 0 0 32-16 0zm141 .9c-4.3-.6-8.6-.9-13-.9l-16 0 0-32 16 0c5.8 0 11.6 .4 17.2 1.1c28.2 3.7 53.7 16.4 73.7 35.2l11.7 10.9-21.8 23.4-11.7-10.9c-15.5-14.5-34.8-24-56.1-26.8z" />
    </Icon>
);

export default FaceWorried;