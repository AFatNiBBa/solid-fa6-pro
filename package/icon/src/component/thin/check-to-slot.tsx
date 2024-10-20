
import { Icon } from "../../index";

/**
 * A component that renders the `check-to-slot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/check-to-slot?s=thin check-to-slot}
 * @preview ![check-to-slot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/check-to-slot.svg)
 */
const CheckToSlot: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M144 48c-17.7 0-32 14.3-32 32l0 328 352 0 0-328c0-17.7-14.3-32-32-32L144 48zM480 80l0 328 32 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-32 0-16 0-352 0-16 0-32 0c-4.4 0-8-3.6-8-8s3.6-8 8-8l32 0L96 80c0-26.5 21.5-48 48-48l288 0c26.5 0 48 21.5 48 48zM48 352l16 0 0 16-16 0c-17.7 0-32 14.3-32 32l0 32c0 17.7 14.3 32 32 32l480 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32l-16 0 0-16 16 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM373.7 176.3L267 283c-3.1 3.1-8.2 3.1-11.3 0l-53.3-53.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L261.3 266l101-101c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z" />
    </Icon>
);

export default CheckToSlot;