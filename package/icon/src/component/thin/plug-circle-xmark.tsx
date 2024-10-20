
import { Icon } from "../../index";

/**
 * A component that renders the `plug-circle-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plug-circle-xmark?s=thin plug-circle-xmark}
 * @preview ![plug-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/plug-circle-xmark.svg)
 */
const PlugCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 104 16 0L112 8zM288 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 104 16 0L288 8zM8 144c-4.4 0-8 3.6-8 8s3.6 8 8 8l32 0 0 80c0 81.3 63.8 147.6 144 151.8L184 504c0 4.4 3.6 8 8 8s8-3.6 8-8l0-112.2c20-1 39-6 56.3-14c-.2-3.2-.3-6.5-.3-9.8c0-2.7 .1-5.4 .2-8.1c-19.1 10.3-41 16.1-64.2 16.1c-75.1 0-136-60.9-136-136l0-80 272 0 0 66c5.1-3.8 10.5-7.3 16-10.5l0-55.5 32 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-32 0-16 0L56 144l-16 0L8 144zM304 368a128 128 0 1 1 256 0 128 128 0 1 1 -256 0zm272 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-82.3-50.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L432 356.7l-50.3-50.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L420.7 368l-50.3 50.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L432 379.3l50.3 50.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L443.3 368l50.3-50.3z" />
    </Icon>
);

export default PlugCircleXmark;