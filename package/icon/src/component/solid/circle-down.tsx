
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `circle-down` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/circle-down?s=solid circle-down}
 * @preview ![circle-down](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYgNDk2QzM4OC41OCA0OTYgNDk2IDM4OC41OCA0OTYgMjU2UzM4OC41OCAxNiAyNTYgMTZDMTIzLjQxOCAxNiAxNiAxMjMuNDIgMTYgMjU2UzEyMy40MTggNDk2IDI1NiA0OTZaTTEyOS4yMTkgMjY1Ljg3NUMxMzEuNjg4IDI1OS44OTEgMTM3LjUzMSAyNTYgMTQ0IDI1NkgyMDhWMTYwQzIwOCAxNDIuMzI3IDIyMi4zMjcgMTI4IDI0MCAxMjhIMjcyQzI4OS42NzMgMTI4IDMwNCAxNDIuMzI3IDMwNCAxNjBWMjU2SDM2OEMzNzQuNDY5IDI1NiAzODAuMzEyIDI1OS44OTEgMzgyLjc4MSAyNjUuODc1QzM4NS4yNjYgMjcxLjg1OSAzODMuODkxIDI3OC43MzQgMzc5LjMxMyAyODMuMzEzTDI2Ny4zMTMgMzk1LjMxM0MyNjEuMDY1IDQwMS41NiAyNTAuOTM1IDQwMS41NiAyNDQuNjg4IDM5NS4zMTNMMTMyLjY4OCAyODMuMzEzQzEyOC4xMDkgMjc4LjczNCAxMjYuNzM0IDI3MS44NTkgMTI5LjIxOSAyNjUuODc1WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CircleDown(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256 496C388.58 496 496 388.58 496 256S388.58 16 256 16C123.418 16 16 123.42 16 256S123.418 496 256 496ZM129.219 265.875C131.688 259.891 137.531 256 144 256H208V160C208 142.327 222.327 128 240 128H272C289.673 128 304 142.327 304 160V256H368C374.469 256 380.312 259.891 382.781 265.875C385.266 271.859 383.891 278.734 379.313 283.313L267.313 395.313C261.065 401.56 250.935 401.56 244.688 395.313L132.688 283.313C128.109 278.734 126.734 271.859 129.219 265.875Z" />
        </Icon>
    </>
}