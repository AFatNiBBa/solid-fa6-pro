
import { Icon } from "../../index";

/**
 * A component that renders the `compass-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/compass-slash?s=light compass-slash}
 * @preview ![compass-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/compass-slash.svg)
 */
const CompassSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448.8 439.3C412.4 464.9 368 480 320 480C196.3 480 96 379.7 96 256c0-29.3 5.6-57.2 15.8-82.8L85.7 152.6C71.8 184.2 64 219.2 64 256c0 141.4 114.6 256 256 256c58.2 0 111.9-19.4 154.9-52.2l-26.1-20.6zM320 0C261.8 0 208.1 19.4 165.1 52.2l26.1 20.6C227.6 47.1 272 32 320 32c123.7 0 224 100.3 224 224c0 29.3-5.6 57.2-15.8 82.8l26.1 20.6c14-31.6 21.7-66.6 21.7-103.4C576 114.6 461.4 0 320 0zM186.9 348.6c-8.3 25 15.5 48.8 40.5 40.5l111-37-30-23.7-91.1 30.4 27-80.9-26.7-21.1-30.6 91.9zM301.6 159.9l30 23.7 91.1-30.4-27 80.9 26.7 21.1 30.6-91.9c8.3-25-15.5-48.8-40.5-40.5l-111 37zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default CompassSlash;