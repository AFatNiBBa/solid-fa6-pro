
import { Icon } from "../../index";

/**
 * A component that renders the `xmark-to-slot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/xmark-to-slot?s=thin xmark-to-slot}
 * @preview ![xmark-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/xmark-to-slot.svg)
 */
const XmarkToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 48c-17.7 0-32 14.3-32 32l0 328 352 0 0-328c0-17.7-14.3-32-32-32L144 48zM480 80l0 328 32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-32 0-16 0-352 0-16 0-32 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l32 0L96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48zM48 352l16 0 0 16-16 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l480 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-16 0 0-16 16 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM210.3 146.3c3.1-3.1 8.2-3.1 11.3 0L288 212.7l66.3-66.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L299.3 224l66.3 66.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L288 235.3l-66.3 66.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L276.7 224l-66.3-66.3c-3.1-3.1-3.1-8.2 0-11.3z" />
    </Icon>
);

export default XmarkToSlot;