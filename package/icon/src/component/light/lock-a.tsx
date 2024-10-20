
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=light lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32c53 0 96 43 96 96l0 64-192 0 0-64c0-53 43-96 96-96zM96 128l0 64-16 0c-44.2 0-80 35.8-80 80L0 432c0 44.2 35.8 80 80 80l288 0c44.2 0 80-35.8 80-80l0-160c0-44.2-35.8-80-80-80l-16 0 0-64C352 57.3 294.7 0 224 0S96 57.3 96 128zM80 224l288 0c26.5 0 48 21.5 48 48l0 160c0 26.5-21.5 48-48 48L80 480c-26.5 0-48-21.5-48-48l0-160c0-26.5 21.5-48 48-48zm49.7 200.8c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2L177.9 400l92.2 0 19.6 39.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5L238.4 265c-.8-1.6-1.8-3-3.1-4.3c-1.4-1.4-3.1-2.6-5-3.4c-2.1-.9-4.2-1.3-6.4-1.3s-4.3 .4-6.4 1.3c-1.8 .8-3.5 1.9-5 3.4c-1.3 1.3-2.3 2.7-3 4.3L129.7 424.8zM193.9 368L224 307.8 254.1 368l-60.2 0z" />
    </Icon>
);

export default LockA;