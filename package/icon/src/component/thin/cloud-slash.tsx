
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `cloud-slash` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-slash?s=thin cloud-slash}
 * @preview ![cloud-slash](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNDhDMzA3LjMwOSA0OCAzNTUuMTQxIDc1LjY2NCAzODAuODI4IDEyMC4xOTdMMzg5LjM4MSAxMzUuMDIzTDQwMy41OTggMTI1LjQ5MkM0MTYuNzY0IDExNi42NjYgNDMyLjExOSAxMTIgNDQ4IDExMkM0OTIuMTEzIDExMiA1MjggMTQ3Ljg4NyA1MjggMTkyQzUyOCAyMDEuODkzIDUyNi4yMDEgMjExLjYwNSA1MjIuNjUyIDIyMC44NjlMNTE1Ljg4OSAyMzguNTI3TDUzNC40MjIgMjQyLjI3NUM1ODYuMzI4IDI1Mi43NzMgNjI0IDI5OC45MiA2MjQgMzUyQzYyNCAzNjguMzE4IDYyMC4zMDkgMzgzLjcyMyA2MTQuMDA4IDM5Ny43MTlMNjI2LjY5NyA0MDcuODA1QzYzNC45NTUgMzkwLjg3NyA2NDAgMzcyLjEwNSA2NDAgMzUyQzY0MCAyOTAuMDk0IDU5NiAyMzguNDA2IDUzNy41OTQgMjI2LjU5NEM1NDEuNjg4IDIxNS45MDYgNTQ0IDIwNC4yMDMgNTQ0IDE5MkM1NDQgMTM5IDUwMSA5NiA0NDggOTZDNDI4LjMxMiA5NiA0MDkuOTA2IDEwMiAzOTQuNjg4IDExMi4yMDNDMzY3IDY0LjIwMyAzMTUuMzEyIDMyIDI1NiAzMkMyMjguMTAyIDMyIDIwMi4yNzMgMzkuNzY4IDE3OS40NDUgNTIuMzA1TDE5My4wNDcgNjMuMTE1QzIxMi4xNDYgNTMuNzQgMjMzLjMyNiA0OCAyNTYgNDhaTTE0NCA0NjRDNzMuNDIyIDQ2NCAxNiA0MDYuNTc4IDE2IDMzNkMxNiAyODEuNzMgNTAuMzU5IDIzMy4xOCAxMDEuNDk4IDIxNS4xODZMMTEyLjU4OCAyMTEuMjg1TDExMi4xNzggMTk5LjUzNUMxMTIuMDkyIDE5Ny4wMzMgMTEyIDE5NC41MTYgMTEyIDE5MkMxMTIgMTg5LjAzNSAxMTIuNjk3IDE4Ni4yNjQgMTEyLjg3NSAxODMuMzQ0TDk4LjA1OSAxNzEuNTY0Qzk3LjE4OCAxNzguMzI4IDk2IDE4NSA5NiAxOTJDOTYgMTk0LjcwMyA5Ni4wOTQgMTk3LjQwNiA5Ni4xODggMjAwLjA5NEM0MC4xODggMjE5Ljc5NyAwIDI3My4yMDMgMCAzMzZDMCA0MTUuNSA2NC41IDQ4MCAxNDQgNDgwSDQ4Ni4wODZMNDY1Ljk1NyA0NjRIMTQ0Wk0xMi45ODggMS43M0MxMS41MjUgMC41NjYgOS43NzEgMCA4LjAyNSAwQzUuNjc0IDAgMy4zMzYgMS4wMjkgMS43MzggMy4wMTJDLTEuMDEyIDYuNDggLTAuNDM0IDExLjUxMiAzLjAyIDE0LjI2Mkw2MjcuMDE0IDUxMC4yNjZDNjI4LjQ5OCA1MTEuNDM4IDYzMC4yNDggNTEyIDYzMS45OTggNTEyQzYzNC4zNDIgNTEyIDYzNi42ODYgNTEwLjk2OSA2MzguMjY0IDUwOC45ODRDNjQxLjAxNCA1MDUuNTE2IDY0MC40MzYgNTAwLjQ4NCA2MzYuOTgyIDQ5Ny43MzRMMTIuOTg4IDEuNzNaIi8+PC9zdmc+|width=32|height=32)
 */
export default function CloudSlash(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M256 48C307.309 48 355.141 75.664 380.828 120.197L389.381 135.023L403.598 125.492C416.764 116.666 432.119 112 448 112C492.113 112 528 147.887 528 192C528 201.893 526.201 211.605 522.652 220.869L515.889 238.527L534.422 242.275C586.328 252.773 624 298.92 624 352C624 368.318 620.309 383.723 614.008 397.719L626.697 407.805C634.955 390.877 640 372.105 640 352C640 290.094 596 238.406 537.594 226.594C541.688 215.906 544 204.203 544 192C544 139 501 96 448 96C428.312 96 409.906 102 394.688 112.203C367 64.203 315.312 32 256 32C228.102 32 202.273 39.768 179.445 52.305L193.047 63.115C212.146 53.74 233.326 48 256 48ZM144 464C73.422 464 16 406.578 16 336C16 281.73 50.359 233.18 101.498 215.186L112.588 211.285L112.178 199.535C112.092 197.033 112 194.516 112 192C112 189.035 112.697 186.264 112.875 183.344L98.059 171.564C97.188 178.328 96 185 96 192C96 194.703 96.094 197.406 96.188 200.094C40.188 219.797 0 273.203 0 336C0 415.5 64.5 480 144 480H486.086L465.957 464H144ZM12.988 1.73C11.525 0.566 9.771 0 8.025 0C5.674 0 3.336 1.029 1.738 3.012C-1.012 6.48 -0.434 11.512 3.02 14.262L627.014 510.266C628.498 511.438 630.248 512 631.998 512C634.342 512 636.686 510.969 638.264 508.984C641.014 505.516 640.436 500.484 636.982 497.734L12.988 1.73Z" />
        </Icon>
    </>
}