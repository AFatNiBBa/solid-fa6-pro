
import { Icon } from "../../index";

/**
 * A component that renders the `face-confused` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-confused?s=regular face-confused}
 * @preview ![face-confused](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/face-confused.svg)
 */
const FaceConfused: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM203.2 385.6l-12.8 9.6c-10.6 8-25.6 5.8-33.6-4.8s-5.8-25.6 4.8-33.6l12.8-9.6c37.4-28 82.9-43.2 129.6-43.2l40 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-40 0c-36.4 0-71.7 11.8-100.8 33.6zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default FaceConfused;