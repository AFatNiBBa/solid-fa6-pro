
import { Icon } from "../../index";

/**
 * A component that renders the `pencil-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-slash?s=thin pencil-slash}
 * @preview ![pencil-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pencil-slash.svg)
 */
const PencilSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7zM319.6 347.4l-90.9 90.9c-1.5 1.5-3.1 3-4.7 4.4l0-34.7c0-4.4-3.6-8-8-8l-40 0 0-40c0-4.4-3.6-8-8-8l-34.8 0c1.4-1.6 2.9-3.2 4.4-4.7l80.2-80.2-12.6-10L126.3 336c-12.3 12.3-21.3 27.5-26.2 44.2L64.3 501.7c-.8 2.8-.1 5.8 2 7.9s5.1 2.8 7.9 2l121.6-35.8c16.7-4.9 31.9-13.9 44.2-26.2l92.2-92.2-12.6-10zm128-332.8L307.7 154.6l12.6 10 60.4-60.4 91.1 91.1-49.7 49.7 12.6 10L561.4 128.3c18.7-18.7 18.7-49.1 0-67.9L515.5 14.6c-18.7-18.7-49.1-18.7-67.9 0zm56.6 11.3l45.8 45.8c12.5 12.5 12.5 32.8 0 45.3l-66.9 66.9L392.1 92.8 459 25.9c12.5-12.5 32.8-12.5 45.3 0zM122.3 368l37.7 0 0 40c0 4.4 3.6 8 8 8l40 0 0 37.7c-5.3 2.8-10.9 5.1-16.7 6.8L83.8 492.2l31.6-107.5c1.7-5.8 4-11.4 6.8-16.7z" />
    </Icon>
);

export default PencilSlash;