
import { Icon } from "../../index";

/**
 * A component that renders the `kit-medical` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kit-medical?s=light kit-medical}
 * @preview ![kit-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/kit-medical.svg)
 */
const KitMedical: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M128 448l320 0 0-384L128 64l0 384zm-32 0L96 64 64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l32 0zM64 32l32 0 16 0 16 0 320 0 16 0 16 0 32 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64l-32 0-16 0-16 0-320 0-16 0-16 0-32 0c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32zM480 448l32 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32l-32 0 0 384zM272 144l32 0c17.7 0 32 14.3 32 32l0 32 32 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-32 0 0 32c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-32-32 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l32 0 0-32c0-17.7 14.3-32 32-32zm0 32l0 48c0 4.2-1.7 8.3-4.7 11.3s-7.1 4.7-11.3 4.7l-48 0 0 32 48 0c8.8 0 16 7.2 16 16l0 48 32 0 0-48c0-8.8 7.2-16 16-16l48 0 0-32-48 0c-8.8 0-16-7.2-16-16l0-48-32 0z" />
    </Icon>
);

export default KitMedical;