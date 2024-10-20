
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=light paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M511.6 36.9c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256C5.5 266.3-.7 277.8 .1 290s8.4 22.9 19.6 27.6L160 376l0 93c0 23.8 19.3 43 43 43c13.1 0 25.4-5.9 33.6-16.1l52.8-66 .1 0 114.2 47.6c9.1 3.8 19.4 3.2 28-1.6s14.5-13.3 16-23l64-416zm-253 380.2l-47 58.8c-2.1 2.6-5.3 4.1-8.6 4.1c-6.1 0-11-4.9-11-11l0-79.7 66.6 27.8zm43.1-16.7l-96.6-40.3L474.1 70.5 416 448 301.8 400.4zM450.5 48.8L173.6 347 32 288 450.5 48.8z" />
    </Icon>
);

export default PaperPlane;