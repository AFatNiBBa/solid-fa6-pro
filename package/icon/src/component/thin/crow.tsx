
import { Icon } from "../../index";

/**
 * A component that renders the `crow` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crow?s=thin crow}
 * @preview ![crow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/crow.svg)
 */
const Crow: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 88c0-48.6 39.4-88 88-88c34.2 0 63.8 19.5 78.4 48L568 48c39.8 0 72 32.2 72 72L528 148l0 44c0 85.3-55.6 157.6-132.6 182.6l52 126.3c1.7 4.1-.3 8.8-4.4 10.4s-8.8-.3-10.4-4.4L379.9 379c-14.1 3.3-28.8 5-43.9 5l-32.8 0 48.2 117c1.7 4.1-.3 8.8-4.4 10.4s-8.8-.3-10.4-4.3L285.9 384l-149 0L10.1 415.7c-3.1 .9-6.6-.2-8.6-3c-2.6-3.6-1.8-8.6 1.8-11.2L352 147.9 352 88zm176 43.5l94.7-23.7C617.1 82.8 594.8 64 568 64l-43.3 0c2.2 7.6 3.3 15.7 3.3 24l0 43.5zM336 368c97.2 0 176-78.8 176-176l0-104c0-39.8-32.2-72-72-72s-72 32.2-72 72l0 64c0 0 0 0 0 .1l0 24c0 88.3-60.1 165.3-145.8 186.7L201 368l135 0zM46 390.3l172.4-43.1C296.9 327.5 352 257 352 176l0-8.3L46 390.3zM440 80a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Crow;