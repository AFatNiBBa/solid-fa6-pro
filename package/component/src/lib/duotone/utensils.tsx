
import { Icon, generic } from "../../index";

/**
 * A component that renders the `utensils` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/utensils?s=duotone utensils}
 * @preview ![utensils](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/utensils.svg)
 */
const Utensils: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 167.9c0 48.5 39.2 87.9 87.7 88.1c16.1 0 32.2 0 48.2 0l.4 0c48.5-.2 87.7-39.6 87.7-88.1c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16l0 134.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8L64 16C64 7.8 57.9 1 49.7 .1C49.2 0 48.6 0 48 0C40.6 0 34 5.1 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9zm112-.5l.3 .7c-.1 0-.2 0-.6 0l.3-.7zM288 176l0 112c0 35.3 28.7 64 64 64l32 0 64 0 0-320c0-17.7-14.3-32-32-32C400 0 288 32 288 176z" />
        <path d="M144 480l0-224-64 0 0 224c0 17.7 14.3 32 32 32s32-14.3 32-32zm304 0l0-128-64 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32z" />
    </Icon>
);

export default Utensils;