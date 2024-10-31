
import { Icon } from "../../index";

/**
 * A component that renders the `envelope-circle-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/envelope-circle-check?s=light envelope-circle-check}
 * @preview ![envelope-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/envelope-circle-check.svg)
 */
const EnvelopeCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 96l384 0c17.7 0 32 14.3 32 32l0 32.7c5.3-.5 10.6-.7 16-.7s10.7 .2 16 .7l0-32.7c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l296.2 0c-8.1-9.8-15.2-20.6-21-32L64 416c-17.7 0-32-14.3-32-32l0-176.4L208.7 337.1c28.2 20.6 66.5 20.6 94.6 0l17.1-12.5c1-16.2 4.3-31.8 9.4-46.6l-45.4 33.3c-16.9 12.4-39.9 12.4-56.8 0L32 167.9 32 128c0-17.7 14.3-32 32-32zM496 224a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-187.3c-6.2-6.2-16.4-6.2-22.6 0L480 353.4l-28.7-28.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c6.2 6.2 16.4 6.2 22.6 0l72-72c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default EnvelopeCircleCheck;