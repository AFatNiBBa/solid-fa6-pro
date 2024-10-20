
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-xmark` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-xmark?s=thin person-circle-xmark}
 * @preview ![person-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-circle-xmark.svg)
 */
const PersonCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-96a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM141.1 144c-21.5 0-41.1 12.3-50.4 31.7L23.2 315.5c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7L76.3 168.7c12-24.9 37.2-40.7 64.8-40.7l37.8 0c27.6 0 52.8 15.8 64.8 40.7l46.1 95.5c-3.7 5-7.1 10.2-10.2 15.6L229.3 175.7C220 156.3 200.4 144 178.9 144l-37.8 0zM104 248l0 232c0 8.8 7.2 16 16 16s16-7.2 16-16l0-120c0-13.3 10.7-24 24-24s24 10.7 24 24l0 120c0 8.8 7.2 16 16 16s16-7.2 16-16l0-232c0-4.4 3.6-8 8-8s8 3.6 8 8l0 232c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-120c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 120c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-232c0-4.4 3.6-8 8-8s8 3.6 8 8zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm205.7-50.3L443.3 368l50.3 50.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L432 379.3l-50.3 50.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L420.7 368l-50.3-50.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L432 356.7l50.3-50.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default PersonCircleXmark;