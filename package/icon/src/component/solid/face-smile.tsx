
import { Icon } from "../../index";

/**
 * A component that renders the `face-smile` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-smile?s=solid face-smile}
 * @preview ![face-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/face-smile.svg)
 */
const FaceSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM164.1 325.5C182 346.2 212.6 368 256 368s74-21.8 91.9-42.5c5.8-6.7 15.9-7.4 22.6-1.6s7.4 15.9 1.6 22.6C349.8 372.1 311.1 400 256 400s-93.8-27.9-116.1-53.5c-5.8-6.7-5.1-16.8 1.6-22.6s16.8-5.1 22.6 1.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceSmile;