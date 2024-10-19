
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `venus` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/venus?s=thin venus}
 * @preview ![venus](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzODQgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNjggMTc2QzM2OCA3OC43OTkgMjg5LjIwMSAwIDE5MiAwUzE2IDc4Ljc5OSAxNiAxNzZDMTYgMjcwLjUgOTAuNTQxIDM0Ny4zODUgMTg0IDM1MS41OTZWNDA4SDEwNEM5OS41OTQgNDA4IDk2IDQxMS41OTQgOTYgNDE2Uzk5LjU5NCA0MjQgMTA0IDQyNEgxODRWNTA0QzE4NCA1MDguNDA2IDE4Ny41OTQgNTEyIDE5MiA1MTJTMjAwIDUwOC40MDYgMjAwIDUwNFY0MjRIMjgwQzI4NC40MDYgNDI0IDI4OCA0MjAuNDA2IDI4OCA0MTZTMjg0LjQwNiA0MDggMjgwIDQwOEgyMDBWMzUxLjU5NkMyOTMuNDU5IDM0Ny4zODUgMzY4IDI3MC41IDM2OCAxNzZaTTMyIDE3NkMzMiA4Ny43NzUgMTAzLjc3NSAxNiAxOTIgMTZTMzUyIDg3Ljc3NSAzNTIgMTc2UzI4MC4yMjUgMzM2IDE5MiAzMzZTMzIgMjY0LjIyNSAzMiAxNzZaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Venus(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 384 512" {...props}>
            <path d="M368 176C368 78.799 289.201 0 192 0S16 78.799 16 176C16 270.5 90.541 347.385 184 351.596V408H104C99.594 408 96 411.594 96 416S99.594 424 104 424H184V504C184 508.406 187.594 512 192 512S200 508.406 200 504V424H280C284.406 424 288 420.406 288 416S284.406 408 280 408H200V351.596C293.459 347.385 368 270.5 368 176ZM32 176C32 87.775 103.775 16 192 16S352 87.775 352 176S280.225 336 192 336S32 264.225 32 176Z" />
        </Icon>
    </>
}