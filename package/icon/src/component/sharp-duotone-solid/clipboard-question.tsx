
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clipboard-question` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clipboard-question?s=sharp-duotone-solid clipboard-question}
 * @preview ![clipboard-question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/clipboard-question.svg)
 */
const ClipboardQuestion: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64l80 0 0 72 0 24 112 0 88 0 24 0 0-24 0-48 0-24 80 0 0 448L0 512 0 64zM104 264l0 6.5 48 0 0-6.5c0-4.4 3.6-8 8-8l56.9 0c8.4 0 15.1 6.8 15.1 15.1c0 5.4-2.9 10.4-7.6 13.1l-44.3 25.4L168 316.6l0 13.9 0 21.5 0 24 48 0 0-24 0-7.6 32.3-18.5c19.6-11.3 31.7-32.1 31.7-54.8c0-34.9-28.3-63.1-63.1-63.1L160 208c-30.9 0-56 25.1-56 56zm64 152l0 48 48 0 0-48-48 0z" />
        <path d="M270.4 64L304 64l0 96-112 0L80 160l0-96 33.6 0C121 27.5 153.3 0 192 0s71 27.5 78.4 64zM216 80a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM104 264c0-30.9 25.1-56 56-56l56.9 0c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L216 344.4l0 7.6 0 24-48 0 0-24 0-21.5 0-13.9 12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1L160 256c-4.4 0-8 3.6-8 8l0 6.5-48 0 0-6.5zm64 200l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default ClipboardQuestion;