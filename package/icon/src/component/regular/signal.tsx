
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `signal` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/signal?s=regular signal}
 * @preview ![signal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNjAgMjg4QzE0Ni43NSAyODggMTM2IDI5OC43NSAxMzYgMzEyVjQ4OEMxMzYgNTAxLjI1IDE0Ni43NSA1MTIgMTYwIDUxMlMxODQgNTAxLjI1IDE4NCA0ODhWMzEyQzE4NCAyOTguNzUgMTczLjI1IDI4OCAxNjAgMjg4Wk0zMiAzODRDMTguNzUgMzg0IDggMzk0Ljc1IDggNDA4VjQ4OEM4IDUwMS4yNSAxOC43NSA1MTIgMzIgNTEyUzU2IDUwMS4yNSA1NiA0ODhWNDA4QzU2IDM5NC43NSA0NS4yNSAzODQgMzIgMzg0Wk0yODggMTkyQzI3NC43NSAxOTIgMjY0IDIwMi43NSAyNjQgMjE2VjQ4OEMyNjQgNTAxLjI1IDI3NC43NSA1MTIgMjg4IDUxMlMzMTIgNTAxLjI1IDMxMiA0ODhWMjE2QzMxMiAyMDIuNzUgMzAxLjI1IDE5MiAyODggMTkyWk00MTYgOTZDNDAyLjc1IDk2IDM5MiAxMDYuNzUgMzkyIDEyMFY0ODhDMzkyIDUwMS4yNSA0MDIuNzUgNTEyIDQxNiA1MTJTNDQwIDUwMS4yNSA0NDAgNDg4VjEyMEM0NDAgMTA2Ljc1IDQyOS4yNSA5NiA0MTYgOTZaTTU0NCAwQzUzMC43NSAwIDUyMCAxMC43NSA1MjAgMjRWNDg4QzUyMCA1MDEuMjUgNTMwLjc1IDUxMiA1NDQgNTEyUzU2OCA1MDEuMjUgNTY4IDQ4OFYyNEM1NjggMTAuNzUgNTU3LjI1IDAgNTQ0IDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function Signal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path d="M160 288C146.75 288 136 298.75 136 312V488C136 501.25 146.75 512 160 512S184 501.25 184 488V312C184 298.75 173.25 288 160 288ZM32 384C18.75 384 8 394.75 8 408V488C8 501.25 18.75 512 32 512S56 501.25 56 488V408C56 394.75 45.25 384 32 384ZM288 192C274.75 192 264 202.75 264 216V488C264 501.25 274.75 512 288 512S312 501.25 312 488V216C312 202.75 301.25 192 288 192ZM416 96C402.75 96 392 106.75 392 120V488C392 501.25 402.75 512 416 512S440 501.25 440 488V120C440 106.75 429.25 96 416 96ZM544 0C530.75 0 520 10.75 520 24V488C520 501.25 530.75 512 544 512S568 501.25 568 488V24C568 10.75 557.25 0 544 0Z" />
        </Icon>
    </>
}