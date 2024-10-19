
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `route` icon from the `solid` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/route?s=solid route}
 * @preview ![route](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MTYgMzIwSDMyMEMzMDIuMzc1IDMyMCAyODggMzA1LjYyNSAyODggMjg4UzMwMi4zNzUgMjU2IDMyMCAyNTZINDE2QzQxNiAyNTYgNTEyIDE0OSA1MTIgOTZTNDY5IDAgNDE2IDBTMzIwIDQzIDMyMCA5NkMzMjAgMTIxLjUgMzQyLjI1IDE1OS4zNzUgMzY1LjI1IDE5MkgzMjBDMjY3LjEyNSAxOTIgMjI0IDIzNS4xMjUgMjI0IDI4OFMyNjcuMTI1IDM4NCAzMjAgMzg0SDQxNkM0MzMuNjI1IDM4NCA0NDggMzk4LjM3NSA0NDggNDE2UzQzMy42MjUgNDQ4IDQxNiA0NDhIMTg1LjVDMTY5LjUgNDcyLjc1IDE1MS43NSA0OTUuNzUgMTM4LjI1IDUxMkg0MTZDNDY4Ljg3NSA1MTIgNTEyIDQ2OC44NzUgNTEyIDQxNlM0NjguODc1IDMyMCA0MTYgMzIwWk00MTYgNjRDNDMzLjc1IDY0IDQ0OCA3OC4yNSA0NDggOTZTNDMzLjc1IDEyOCA0MTYgMTI4UzM4NCAxMTMuNzUgMzg0IDk2UzM5OC4yNSA2NCA0MTYgNjRaTTk2IDI1NkM0MyAyNTYgMCAyOTkgMCAzNTJTOTYgNTEyIDk2IDUxMlMxOTIgNDA1IDE5MiAzNTJTMTQ5IDI1NiA5NiAyNTZaTTk2IDM4NEM3OC4yNSAzODQgNjQgMzY5Ljc1IDY0IDM1MlM3OC4yNSAzMjAgOTYgMzIwUzEyOCAzMzQuMjUgMTI4IDM1MlMxMTMuNzUgMzg0IDk2IDM4NFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function Route(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M416 320H320C302.375 320 288 305.625 288 288S302.375 256 320 256H416C416 256 512 149 512 96S469 0 416 0S320 43 320 96C320 121.5 342.25 159.375 365.25 192H320C267.125 192 224 235.125 224 288S267.125 384 320 384H416C433.625 384 448 398.375 448 416S433.625 448 416 448H185.5C169.5 472.75 151.75 495.75 138.25 512H416C468.875 512 512 468.875 512 416S468.875 320 416 320ZM416 64C433.75 64 448 78.25 448 96S433.75 128 416 128S384 113.75 384 96S398.25 64 416 64ZM96 256C43 256 0 299 0 352S96 512 96 512S192 405 192 352S149 256 96 256ZM96 384C78.25 384 64 369.75 64 352S78.25 320 96 320S128 334.25 128 352S113.75 384 96 384Z" />
        </Icon>
    </>
}