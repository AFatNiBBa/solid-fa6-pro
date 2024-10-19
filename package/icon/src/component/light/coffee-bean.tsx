
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `coffee-bean` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-bean?s=light coffee-bean}
 * @preview ![coffee-bean](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yODcuMjg4IDMyQzIxOS43OTUgMzIgMTQ4LjMzMiA2OS42NjQgOTMuMjQgMTI0LjcwNUMtODIuOTY3IDMwMC43NDEgMTkuNzk1IDQ4MCAxNjAuNzk4IDQ4MEMyMjguMjkyIDQ4MCAyOTkuNzUzIDQ0Mi4zMzQgMzU0Ljg0NSAzODcuMjk1QzUzMS4zMzYgMjEwLjk4IDQyNy41IDMyIDI4Ny4yODggMzJaTTExNS45MzQgMTQ3LjMxNkMxNjguMTU0IDk1LjE0NiAyMzIuMjExIDY0IDI4Ny4yODggNjRDMjg3LjQ3OCA2NCAyODcuNjY3IDY0IDI4Ny44NTcgNjQuMDAxQzMxNy45MzQgNjQuMTE3IDM0Ni41NzEgNzcuNDYxIDM2OC4yMDEgOTguMzEyQzM2OC40NSA5OC41NTMgMzY4LjY5OSA5OC43OTQgMzY4Ljk0OSA5OS4wMzVDMzUwLjExIDE2MC44MyAzMDguNDM4IDIzMC41MjkgMjE1LjE3OSAyNDguMDYyQzEzNC42ODEgMjYzLjE4NCA3OC4wNjYgMzA4Ljg0NiA0OS4yMiAzODAuNzA1QzEyLjQyNiAzMzQuMzgzIDMyLjA5OCAyMzEuMDY5IDExNS45MzQgMTQ3LjMxNlpNMzMyLjE1MiAzNjQuNjgyQzI3OS45MzEgNDE2Ljg1NCAyMTUuODc0IDQ0OCAxNjAuNzk4IDQ0OEMxMTMuNjc2IDQ0OCA5Ny45NjkgNDMxLjg5MSA3My43OTIgNDA3LjcyN0M5Ni41NjggMzM3LjgyNiAxNDYuOTM4IDI5My40MjggMjIxLjEzIDI3OS41QzMwNC4wNTQgMjYzLjg5OCAzNjMuMjMzIDIxMC44ODEgMzk0LjEwNSAxMjUuNDc1QzQ0OC45ODkgMTg5LjM1NyAzOTYuMTExIDMwMC43ODcgMzMyLjE1MiAzNjQuNjgyWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function CoffeeBean(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path d="M287.288 32C219.795 32 148.332 69.664 93.24 124.705C-82.967 300.741 19.795 480 160.798 480C228.292 480 299.753 442.334 354.845 387.295C531.336 210.98 427.5 32 287.288 32ZM115.934 147.316C168.154 95.146 232.211 64 287.288 64C287.478 64 287.667 64 287.857 64.001C317.934 64.117 346.571 77.461 368.201 98.312C368.45 98.553 368.699 98.794 368.949 99.035C350.11 160.83 308.438 230.529 215.179 248.062C134.681 263.184 78.066 308.846 49.22 380.705C12.426 334.383 32.098 231.069 115.934 147.316ZM332.152 364.682C279.931 416.854 215.874 448 160.798 448C113.676 448 97.969 431.891 73.792 407.727C96.568 337.826 146.938 293.428 221.13 279.5C304.054 263.898 363.233 210.881 394.105 125.475C448.989 189.357 396.111 300.787 332.152 364.682Z" />
        </Icon>
    </>
}