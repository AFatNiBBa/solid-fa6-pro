
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `prescription-bottle-medical` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle-medical?s=duotone prescription-bottle-medical}
 * @preview ![prescription-bottle-medical](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTMyIDQ0OEMzMiA0ODMuMTk5IDYwLjgwMSA1MTIgOTYgNTEySDI4OEMzMjMuMTk5IDUxMiAzNTIgNDgzLjE5OSAzNTIgNDQ4Vjk2SDMyVjQ0OFpNOTYgMjg4Qzk2IDI3OS4xOTkgMTAzLjE5OSAyNzIgMTEyIDI3MkgxNjBWMjI0QzE2MCAyMTUuMTk5IDE2Ny4xOTkgMjA4IDE3NiAyMDhIMjA4QzIxNi44MDEgMjA4IDIyNCAyMTUuMTk5IDIyNCAyMjRWMjcySDI3MkMyODAuODAxIDI3MiAyODggMjc5LjE5OSAyODggMjg4VjMyMEMyODggMzI4Ljc5OSAyODAuODAxIDMzNiAyNzIgMzM2SDIyNFYzODRDMjI0IDM5Mi43OTkgMjE2LjgwMSA0MDAgMjA4IDQwMEgxNzZDMTY3LjE5OSA0MDAgMTYwIDM5Mi43OTkgMTYwIDM4NFYzMzZIMTEyQzEwMy4xOTkgMzM2IDk2IDMyOC43OTkgOTYgMzIwVjI4OFoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjcyIDI3MkgyMjRWMjI0QzIyNCAyMTUuMTk5IDIxNi44MDEgMjA4IDIwOCAyMDhIMTc2QzE2Ny4xOTkgMjA4IDE2MCAyMTUuMTk5IDE2MCAyMjRWMjcySDExMkMxMDMuMTk5IDI3MiA5NiAyNzkuMTk5IDk2IDI4OFYzMjBDOTYgMzI4Ljc5OSAxMDMuMTk5IDMzNiAxMTIgMzM2SDE2MFYzODRDMTYwIDM5Mi43OTkgMTY3LjE5OSA0MDAgMTc2IDQwMEgyMDhDMjE2LjgwMSA0MDAgMjI0IDM5Mi43OTkgMjI0IDM4NFYzMzZIMjcyQzI4MC44MDEgMzM2IDI4OCAzMjguNzk5IDI4OCAzMjBWMjg4QzI4OCAyNzkuMTk5IDI4MC44MDEgMjcyIDI3MiAyNzJaTTM2MCAwSDI0QzEwLjc1IDAgMCAxMC43NSAwIDI0VjcyQzAgODUuMjUgMTAuNzUgOTYgMjQgOTZIMzYwQzM3My4yNSA5NiAzODQgODUuMjUgMzg0IDcyVjI0QzM4NCAxMC43NSAzNzMuMjUgMCAzNjAgMFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function PrescriptionBottleMedical(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path class={generic.secondary} d="M32 448C32 483.199 60.801 512 96 512H288C323.199 512 352 483.199 352 448V96H32V448ZM96 288C96 279.199 103.199 272 112 272H160V224C160 215.199 167.199 208 176 208H208C216.801 208 224 215.199 224 224V272H272C280.801 272 288 279.199 288 288V320C288 328.799 280.801 336 272 336H224V384C224 392.799 216.801 400 208 400H176C167.199 400 160 392.799 160 384V336H112C103.199 336 96 328.799 96 320V288Z" />
            <path d="M272 272H224V224C224 215.199 216.801 208 208 208H176C167.199 208 160 215.199 160 224V272H112C103.199 272 96 279.199 96 288V320C96 328.799 103.199 336 112 336H160V384C160 392.799 167.199 400 176 400H208C216.801 400 224 392.799 224 384V336H272C280.801 336 288 328.799 288 320V288C288 279.199 280.801 272 272 272ZM360 0H24C10.75 0 0 10.75 0 24V72C0 85.25 10.75 96 24 96H360C373.25 96 384 85.25 384 72V24C384 10.75 373.25 0 360 0Z" />
        </Icon>
    </>
}